import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileSticky = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-stone/95 p-4 backdrop-blur-lg md:hidden"
    >
      <div className="flex gap-3">
        <a
          href="https://www.spawoda.fr/order-form/eyJmIjoxNjQxNDR9/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex-1 rounded-full py-3 text-center text-xs uppercase tracking-wider"
        >
          {t("mobile.training")}
        </a>
        <button
          onClick={scrollToContact}
          className="btn-stone flex-1 rounded-full py-3 text-center text-xs uppercase tracking-wider"
        >
          {t("mobile.apply")}
        </button>
      </div>
    </motion.div>
  );
};

export default MobileSticky;
