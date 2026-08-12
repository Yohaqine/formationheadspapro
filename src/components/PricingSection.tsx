import { motion } from "framer-motion";
import { Check, User, Users, UsersRound, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import klarnaLogo from "@/assets/klarna-logo.webp";

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

  const features = t("pricing.features").split(",");

  return (
    <section id="pricing" className="relative overflow-hidden bg-stone py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8 text-center">
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

        {/* Duration Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-6 py-3">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="font-body text-sm font-medium text-gold">{t("pricing.duration")}</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto flex max-w-5xl flex-col justify-center gap-6 md:flex-row">
          {/* Solo Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-light group relative w-full max-w-md overflow-hidden rounded-2xl border border-clay-dark/20 bg-clay/5 p-8"
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-dark/10">
                <User className="h-6 w-6 text-clay-dark" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{t("pricing.solo.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("pricing.solo.subtitle")}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-light text-foreground">{t("pricing.solo.price")}</span>
              <span className="text-muted-foreground">{t("pricing.solo.payment")}</span>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
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
                {t("pricing.cta.program")}
              </button>
              <button
                onClick={scrollToContact}
                className="btn-gold w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
              >
                {t("pricing.cta.apply")}
              </button>
              <a
  href="https://buy.stripe.com/4gM9AVe88dMg5Vo7wAcV20o"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full rounded-full border border-gold/40 py-4 text-center font-body text-sm uppercase tracking-wider text-gold transition-all hover:bg-gold/10"
>
  Financement personnel
</a>
            </div>

            {/* Decorative */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-clay-dark/5 transition-transform duration-500 group-hover:-translate-y-4 group-hover:translate-x-4" />
          </motion.div>
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 bg-clay/5 p-6"
>
  {/* Badge */}
  <div className="mb-6">
    <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gold">
      Professionnels uniquement
    </span>
  </div>

  {/* Header */}
  <div className="mb-6 flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-dark/10">
      <User className="h-6 w-6 text-clay-dark" />
    </div>

    <div>
      <h3 className="font-display text-2xl text-foreground">
        Professionnels
      </h3>
      <p className="text-sm text-muted-foreground">
        Formation intensive - 1 journée
      </p>
    </div>
  </div>

  {/* Prix */}
  <div className="mb-6 flex items-baseline gap-2">
    <span className="font-display text-5xl font-light text-foreground">
      950€ 
    </span>
    <span className="text-muted-foreground">
      par personne
    </span>
  </div>

  {/* Prestations */}
  <ul className="mb-6 space-y-2">
    {[
      "1 journée de formation intensive",
      "Réservée aux professionnels de la coiffure et du bien-être",
      "Théorie ciblée",
      "Pratique sur modèle réel & correction personnalisée",
      "Certificat Head Spa",
      "Accès à la formation en ligne",
      "Suivi post-formation",
    ].map((feature, index) => (
      <li
        key={index}
        className="flex items-center gap-3 text-sm text-foreground/80"
      >
        <Check className="h-4 w-4 shrink-0 text-gold" />
        {feature}
      </li>
    ))}
  </ul>

  {/* Boutons */}
  <div className="flex flex-col gap-3">
    <button
      onClick={scrollToCurriculum}
      className="btn-stone w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
    >
      Voir le programme
    </button>

    <button
      onClick={scrollToContact}
      className="btn-gold w-full rounded-full py-4 text-center font-body text-sm uppercase tracking-wider"
    >
      Candidater
    </button>
    <a
  href="https://buy.stripe.com/eVq4gB7JKbE8gA2g36cV20p"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full rounded-full border border-gold/40 py-4 text-center font-body text-sm uppercase tracking-wider text-gold transition-all hover:bg-gold/10"
>
  Financement personnel
</a>
  </div>

  {/* Décoration */}
  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4" />
</motion.div>
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-10 text-center"
>
  <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-6 py-4">
   <p className="text-sm font-medium text-foreground">
  Financement professionnel possible via{" "}
  <a
    href="https://www.opcoep.fr/entreprise/financer-mes-projets"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold underline underline-offset-4 hover:opacity-80"
  >
    OPCO
  </a>
  {" "}ou{" "}
  <a
    href="https://www.fafcea.com/jai-deja-trouve-ma-formation/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold underline underline-offset-4 hover:opacity-80"
  >
    FAFCEA
  </a>
  , selon votre éligibilité.
</p>
  </div>
</motion.div>

        {/* Klarna Payment Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="font-body text-base font-medium text-foreground">
            Payer en 3 fois avec Klarna
          </span>
          <img
            src={klarnaLogo}
            alt="Klarna"
            className="h-8 object-contain"
          />
        </motion.div>

        {/* Travel Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-4">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="text-base font-medium text-foreground">
              {t("pricing.travel")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
