import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

import trainee1 from "@/assets/trainees/IMG_2612.jpeg";
import trainee2 from "@/assets/trainees/IMG_4052.jpeg";
import trainee3 from "@/assets/trainees/IMG_4132.jpeg";
import trainee4 from "@/assets/trainees/IMG_4217.jpeg";
import trainee5 from "@/assets/trainees/IMG_8689.jpeg";

const traineePhotos = [
  { src: trainee1, alt: "Trainee with diploma 1" },
  { src: trainee2, alt: "Trainee with diploma 2" },
  { src: trainee3, alt: "Trainee with diploma 3" },
  { src: trainee4, alt: "Trainee with diploma 4" },
  { src: trainee5, alt: "Trainee with diploma 5" },
];

const TraineeGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto mt-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h3 className="font-display text-2xl font-light text-foreground md:text-3xl">
          {t("reviews.gallery.title")} <span className="text-gold">{t("reviews.gallery.highlight")}</span>
        </h3>
      </motion.div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {traineePhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelectedImage(photo.src)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Gold border accent on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-gold/0 transition-all duration-300 group-hover:border-gold/50" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Trainee with diploma"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default TraineeGallery;
