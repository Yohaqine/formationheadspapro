import { motion } from "framer-motion";
import { Check, Monitor, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const scrollToCurriculum = () => {
    document.getElementById("program")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const digitalFeatures = t("pricing.digital.features").split(",");
  const immersionFeatures = t("pricing.immersion.features").split(",");

  return (
    <section id="pricing" className="relative overflow-hidden bg-stone py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            {t("pricing.label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-light text-foreground md:text-5xl"
          >
            {t("pricing.title")} <span className="text-gold italic">{t("pricing.title.highlight")}</span>
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Digital Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-light group relative overflow-hidden rounded-2xl border border-clay-dark/20 bg-clay/5 p-8"
          >
            {/* Discount Badge */}
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 font-bold text-gold-light text-base">
                -37%
              </span>
            </div>

            {/* Header */}
            <div className="mb-6 mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-dark/10">
                <Monitor className="h-6 w-6 text-clay-dark" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{t("pricing.digital.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("pricing.digital.subtitle")}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-lg text-muted-foreground line-through">300€</span>
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-light text-foreground">190€</span>
              <span className="text-muted-foreground">{t("pricing.digital.payment")}</span>
            </div>
            <p className="mb-6 text-xs text-gold">{t("pricing.digital.offer")}</p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {digitalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://www.spawoda.fr/order-form/eyJmIjoxNjQxNDR9/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold block w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
            >
              {t("pricing.digital.cta")}
            </a>

            {/* Decorative */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-clay-dark/5 transition-transform duration-500 group-hover:-translate-y-4 group-hover:translate-x-4" />
          </motion.div>

          {/* Immersion Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-stone-light to-stone p-8"
          >
            {/* Badges */}
            <div className="absolute left-4 right-4 top-4 flex justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 font-bold text-gold-light text-base">
                -41%
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold">
                <Sparkles className="h-3 w-3" />
                {t("pricing.recommended")}
              </span>
            </div>

            {/* Header */}
            <div className="mb-6 mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{t("pricing.immersion.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("pricing.immersion.subtitle")}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-lg text-muted-foreground line-through">1000€</span>
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-light text-gold">594€</span>
              <span className="text-muted-foreground">{t("pricing.immersion.payment")}</span>
            </div>
            <p className="mb-6 text-xs text-gold">{t("pricing.immersion.offer")}</p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {immersionFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={scrollToCurriculum}
                className="btn-stone w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
              >
                {t("pricing.immersion.cta.program")}
              </button>
              <button
                onClick={scrollToContact}
                className="btn-gold w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
              >
                {t("pricing.immersion.cta.apply")}
              </button>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
