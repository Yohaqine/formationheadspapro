import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpeg";
const InstructorSection = () => {
  return <section className="relative overflow-hidden bg-stone-gradient py-24 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-water/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column - Asymmetric */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img src={portrait} alt="Yohaqîne - Fondatrice de Spa Woda" className="aspect-[3/4] w-full object-cover object-top" />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6 lg:-right-12">
              <p className="font-display text-3xl font-light text-gold">7+</p>
              <p className="text-sm text-muted-foreground">
                Années d'expertise
              </p>
            </motion.div>

            {/* Decorative Frame */}
            <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-gold/30" />
          </motion.div>

          {/* Content Column */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="lg:pl-8">
            {/* Label */}
            <motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold">
              Votre Formatrice
            </motion.span>

            {/* Name */}
            <h2 className="mb-6 font-display text-4xl font-light text-foreground md:text-5xl">
              Yohaqîne
              <span className="ml-3 text-gold">水</span>
            </h2>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg font-light leading-relaxed">
                Fondatrice de Spa Woda et pionnière du Head Spa en France, 
                Yohaqîne a forgé son expertise au cœur de{" "}
                <span className="text-foreground">l'hôtellerie de luxe</span> 
                {" "}avant de se consacrer entièrement à l'art du soin capillaire japonais.
              </p>
              <p className="leading-relaxed">
                Sa méthode unique fusionne les techniques ancestrales du 
                <span className="text-gold"> Shiatsu crânien</span>, la science 
                trichologique moderne et une approche holistique du bien-être. 
                Chaque geste est pensé pour créer une expérience sensorielle inoubliable.
              </p>
              <p className="leading-relaxed">
                Plus qu'une formation, c'est une transmission : celle d'un 
                savoir-faire d'exception et d'une philosophie où{" "}
                <span className="italic text-foreground">
                  "chaque client devient une œuvre"
                </span>.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Shiatsu Certifié", "Trichologie", "Luxury Hospitality", "Head Spa Expert"].map((credential, index) => <motion.span key={credential} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + index * 0.1
            }} className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs uppercase tracking-wider text-secondary-foreground">
                    {credential}
                  </motion.span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default InstructorSection;