import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProgram = () => {
    document.getElementById("program")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInstructor = () => {
    document.getElementById("instructor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Ken Burns */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="min-h-full min-w-full scale-110 object-cover"
        >
          <source src="/videos/training_hero.mov" type="video/mp4" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-gold"
          >
            {t("hero.preheadline")}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-6 font-display text-4xl font-light leading-tight tracking-wide text-foreground md:text-6xl lg:text-7xl"
          >
            {t("hero.headline1")}
            <br />
            <span className="text-gold-gradient font-medium italic">
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-12 font-body text-lg font-light text-muted-foreground md:text-xl"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold rounded-full px-8 py-4 font-body text-sm uppercase tracking-wider"
            >
              {t("hero.cta.apply")}
            </button>
            <button
              onClick={scrollToProgram}
              className="btn-stone rounded-full px-8 py-4 font-body text-sm uppercase tracking-wider"
            >
              {t("hero.cta.program")}
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          onClick={scrollToInstructor}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
            <ChevronDown className="h-5 w-5 text-gold" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
