import { motion } from "framer-motion";

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

      </div>
    </section>
  );
};

export default VideoSection;
