import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Calendar, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Email invalide").max(255),
  phone: z.string().min(10, "Numéro de téléphone invalide").max(20),
  preference: z.enum(["online", "onsite"], {
    required_error: "Veuillez sélectionner une préférence",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/25695252/ufps8ng/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "School Woda Landing Page",
        }),
      });

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons très prochainement.",
      });

      reset();

      // PASTE YOUR CALENDLY URL HERE
      // Example: window.open("https://calendly.com/your-link", "_blank");
      // Or redirect: window.location.href = "https://calendly.com/your-link";
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
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
              Besoin de conseils ?
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-display text-3xl font-light text-foreground md:text-4xl"
            >
              Réservez un appel <span className="text-gold italic">découverte</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Vous hésitez entre le Digital et le Présentiel ? 
              Discutons de votre projet pour trouver la formule idéale.
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
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Votre nom
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Marie Dupont"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Votre email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="marie@example.com"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Téléphone
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+33 6 12 34 56 78"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Preference */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Formule souhaitée
              </label>
              <select
                {...register("preference")}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="">Sélectionnez une option</option>
                <option value="online">Formation en ligne (190€)</option>
                <option value="onsite">Formation en présentiel (594€)</option>
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
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  Réserver mon appel
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
