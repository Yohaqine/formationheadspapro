import { motion } from "framer-motion";
import conference1 from "@/assets/conference1.png";
import conference2 from "@/assets/conference2.png";
import conference3 from "@/assets/conference3.png";
import conference4 from "@/assets/conference4.png";
import conference5 from "@/assets/conference5.png";

const VideoSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Formation en ligne
          </p>

          <h2 className="mb-5 text-3xl font-semibold md:text-5xl">
            Découvrez la formation Head Spa Japonais
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            La théorie et la pratique réunies pour apprendre le Head Spa
            Japonais à votre rythme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="overflow-hidden rounded-[32px] border border-gold/20 bg-card shadow-2xl">
            <iframe
              width="360"
              height="640"
              src="https://www.youtube.com/embed/eRJ36sp9Ioc"
              title="Formation en ligne Head Spa Japonais"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="block max-w-full"
            />
          </div>
        </motion.div>
    {/<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20"
>
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
      Transmission & Expertise
    </p>

    <h3 className="text-3xl font-semibold md:text-4xl">
      La transmission au cœur de la formation
    </h3>

    <p className="mt-4 text-muted-foreground">
      Des conférences et interventions auprès des futurs professionnels
      de l'esthétique et du bien-être.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[conference1, conference2, conference3, conference4, conference5].map(
      (photo, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src={photo}
            alt={`Conférence Head Spa Japonais ${index + 1}`}
            className="h-80 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      )
    )}
  </div>
</motion.div>

  </div>

      </div>
    </section>
  );
};

export default VideoSection;
