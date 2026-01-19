import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Calendar, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Rate limiting constants
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 2;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  // Rate limiting state
  const submissionTimestamps = useRef<number[]>([]);
  
  // Honeypot field state (should remain empty)
  const [honeypot, setHoneypot] = useState("");

  // Enhanced validation schema with stricter rules
  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, t("contact.name.error"))
      .max(100, t("contact.name.error"))
      .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, t("contact.name.error")), // Only letters, spaces, hyphens, apostrophes
    email: z
      .string()
      .trim()
      .email(t("contact.email.error"))
      .max(255, t("contact.email.error"))
      .toLowerCase(),
    phone: z
      .string()
      .trim()
      .min(10, t("contact.phone.error"))
      .max(20, t("contact.phone.error"))
      .regex(/^[+]?[\d\s()-]+$/, t("contact.phone.error")), // Only valid phone characters
    preference: z.enum(["solo", "group23", "group4"], {
      required_error: t("contact.preference.error"),
    }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Check rate limiting
  const isRateLimited = useCallback(() => {
    const now = Date.now();
    // Clean old timestamps outside the window
    submissionTimestamps.current = submissionTimestamps.current.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
    );
    return submissionTimestamps.current.length >= MAX_SUBMISSIONS_PER_WINDOW;
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot - if filled, it's likely a bot
    if (honeypot) {
      // Silently "succeed" to not alert bots
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });
      reset();
      return;
    }

    // Check rate limiting
    if (isRateLimited()) {
      toast({
        title: t("contact.error.title"),
        description: t("contact.ratelimit.error"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Record this submission attempt
      submissionTimestamps.current.push(Date.now());

      // Sanitize data before sending
      const sanitizedData = {
        name: data.name.trim().slice(0, 100),
        email: data.email.trim().toLowerCase().slice(0, 255),
        phone: data.phone.trim().slice(0, 20),
        preference: data.preference,
        timestamp: new Date().toISOString(),
        source: "School Woda Landing Page",
      };

      await fetch("https://hooks.zapier.com/hooks/catch/25695252/ufps8ng/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(sanitizedData),
      });

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });

      reset();
      setHoneypot("");

      // Redirect to Calendly after successful submission
      window.open("https://calendly.com/yohaqine-chopin/30min?month=2025-12", "_blank");
      
    } catch (error) {
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone/50 to-background" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-water/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20"
            >
              <Phone className="h-7 w-7 text-gold" />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold"
            >
              {t("contact.label")}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-display text-3xl font-light text-foreground md:text-4xl"
            >
              {t("contact.title")} <span className="text-gold italic">{t("contact.title.highlight")}</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card space-y-6 rounded-2xl p-8"
          >
            {/* Honeypot field - hidden from users, catches bots */}
            <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("contact.name.label")}
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder={t("contact.name.placeholder")}
                maxLength={100}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("contact.email.label")}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder={t("contact.email.placeholder")}
                maxLength={255}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("contact.phone.label")}
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder={t("contact.phone.placeholder")}
                maxLength={20}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Preference */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("contact.preference.label")}
              </label>
              <select
                {...register("preference")}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="">{t("contact.preference.placeholder")}</option>
                <option value="solo">{t("contact.preference.solo")}</option>
                <option value="group23">{t("contact.preference.group23")}</option>
                <option value="group4">{t("contact.preference.group4")}</option>
              </select>
              {errors.preference && (
                <p className="mt-1 text-xs text-destructive">{errors.preference.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold flex w-full items-center justify-center gap-2 rounded-full py-4 font-body text-sm uppercase tracking-wider disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("contact.submitting")}
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  {t("contact.submit")}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
