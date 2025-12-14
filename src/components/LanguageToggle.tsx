import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1"
    >
      <button
        onClick={() => setLanguage("fr")}
        className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all ${
          language === "fr"
            ? "bg-gold text-stone"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all ${
          language === "en"
            ? "bg-gold text-stone"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
