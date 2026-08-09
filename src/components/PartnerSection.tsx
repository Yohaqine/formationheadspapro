import { useLanguage } from "@/contexts/LanguageContext";

const PartnerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">
          {t("partner.label")}
        </p>

        <h2 className="text-4xl font-light mb-6">
          {t("partner.title")}{" "}
          <span className="text-amber-400">
            {t("partner.title.highlight")}
          </span>
        </h2>

        <h3 className="text-2xl mb-4">{t("partner.name")}</h3>

        <p className="text-gray-300 mb-4">
          {t("partner.description")}
        </p>

        <p className="text-gray-300 mb-8">
          {t("partner.training")}
        </p>

        <a
          href={t("partner.url")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-amber-400 text-amber-400"
        >
          Découvrir Head Spa Officiel
        </a>
      </div>
    </section>
  );
};

export default PartnerSection;
