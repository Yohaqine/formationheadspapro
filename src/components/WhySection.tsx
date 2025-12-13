import { motion } from "framer-motion";
import { TrendingUp, Award, Heart, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Rentabilité",
    subtitle: "ROI Exceptionnel",
    description:
      "Un Head Spa se facture entre 80€ et 150€. Avec une formation à 190€, votre investissement est rentabilisé dès le 2ème client.",
    accent: true,
  },
  {
    icon: Heart,
    title: "Expertise Japonaise",
    subtitle: "Shiatsu & Massage",
    description:
      "Maîtrisez les techniques ancestrales du shiatsu crânien, combinées aux protocoles modernes de trichologie pour des résultats visibles.",
  },
  {
    icon: Award,
    title: "Certificat & Suivi",
    subtitle: "Accompagnement Premium",
    description:
      "Obtenez votre certification officielle et bénéficiez d'un suivi post-formation pour perfectionner votre pratique.",
  },
  {
    icon: Users,
    title: "Communauté",
    subtitle: "Réseau d'Experts",
    description:
      "Rejoignez une communauté passionnée de professionnels du bien-être et partagez vos expériences.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="relative overflow-hidden bg-stone py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gold/5 to-transparent" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-water/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            Pourquoi Nous Choisir
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-light text-foreground md:text-5xl"
          >
            Une formation qui <span className="text-gold italic">transforme</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature Cards */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-gold/50 ${
                feature.accent ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  {feature.subtitle}
                </span>
                <h3 className="mb-3 font-display text-xl text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-gold/5 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            </motion.div>
          ))}
        </div>

        {/* Video Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            >
              <source src="/videos/teaser_video.MOV" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl text-foreground md:text-2xl">
                Découvrez l'univers <span className="text-gold">Spa Woda</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
