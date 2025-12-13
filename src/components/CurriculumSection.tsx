import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Brain, Hand, Sparkles, Users, Award } from "lucide-react";

const modules = [
  {
    id: "module-1",
    icon: BookOpen,
    title: "Module 1 : Introduction au Head Spa",
    duration: "1h30",
    topics: [
      "Histoire et philosophie du Head Spa japonais",
      "Les bienfaits thérapeutiques et esthétiques",
      "Comprendre les attentes clients",
      "Créer une expérience sensorielle unique",
    ],
  },
  {
    id: "module-2",
    icon: Brain,
    title: "Module 2 : Anatomie & Trichologie",
    duration: "2h",
    topics: [
      "Anatomie du cuir chevelu et des follicules",
      "Les différents types de cheveux et leurs besoins",
      "Diagnostic capillaire approfondi",
      "Pathologies courantes et solutions adaptées",
    ],
  },
  {
    id: "module-3",
    icon: Hand,
    title: "Module 3 : Techniques de Massage",
    duration: "3h",
    topics: [
      "Les bases du Shiatsu crânien",
      "Pressions, effleurages et pétrissages",
      "Techniques de relaxation profonde",
      "Protocole signature Spa Woda",
    ],
  },
  {
    id: "module-4",
    icon: Sparkles,
    title: "Module 4 : Rituels & Protocoles",
    duration: "2h30",
    topics: [
      "Sélection et utilisation des huiles essentielles",
      "Les outils professionnels du Head Spa",
      "Déroulé complet d'une séance",
      "Personnalisation selon les besoins clients",
    ],
  },
  {
    id: "module-5",
    icon: Users,
    title: "Module 5 : Expérience Client",
    duration: "1h30",
    topics: [
      "Accueil et prise en charge du client",
      "Communication et conseil personnalisé",
      "Gestion des attentes et fidélisation",
      "Créer une ambiance immersive",
    ],
  },
  {
    id: "module-6",
    icon: Award,
    title: "Module 6 : Certification & Pratique",
    duration: "En présentiel",
    topics: [
      "Mise en situation réelle",
      "Correction et perfectionnement des gestes",
      "Évaluation finale",
      "Remise du certificat Spa Woda",
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section id="program" className="relative bg-background py-24 lg:py-32">
      {/* Background Accents */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-water/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            Le Programme
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-light text-foreground md:text-5xl"
          >
            Un parcours <span className="text-gold italic">complet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            De la théorie à la pratique, maîtrisez chaque aspect du Head Spa 
            pour offrir des expériences d'exception.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="glass-card overflow-hidden rounded-xl border-none"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>svg]:text-gold">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <module.icon className="h-5 w-5 text-gold transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-lg text-foreground">
                        {module.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Durée : {module.duration}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="ml-14 space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <motion.li
                        key={topicIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: topicIndex * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {topic}
                      </motion.li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
