import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE_NUMBER = "+33 6 66 11 17 26";
const PHONE_NUMBER_RAW = "33666111726";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER_RAW}`;

const ContactSection = () => {
  const { t } = useLanguage();

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

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card space-y-8 rounded-2xl p-8 text-center"
          >
            {/* Phone Number Display */}
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                {t("contact.phone.label")}
              </p>
              <a 
                href={`tel:+${PHONE_NUMBER_RAW}`}
                className="font-display text-3xl font-light text-foreground transition-colors hover:text-gold md:text-4xl"
              >
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {/* Call Button */}
              <a
                href={`tel:+${PHONE_NUMBER_RAW}`}
                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-body text-sm uppercase tracking-wider"
              >
                <Phone className="h-5 w-5" />
                {t("contact.call")}
              </a>

              {/* WhatsApp Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-8 py-4 font-body text-sm uppercase tracking-wider text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
