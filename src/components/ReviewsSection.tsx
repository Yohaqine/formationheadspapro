import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    name: "Liza ROY",
    text: "Une perle ! Une superbe formatrice qui prend le temps et d'une douceur... foncez !",
    rating: 5,
  },
  {
    name: "Hanane Hakim",
    text: "Je ne peux que recommander ! Pédagogie, expertise et douceur. On ressort avec de vraies compétences et une belle énergie.",
    rating: 5,
  },
  {
    name: "Filiz Aydin",
    text: "Formation de grande qualité ! J'ai appris à maîtriser chaque étape. La formatrice est toujours présente pour me soutenir.",
    rating: 5,
  },
  {
    name: "Lucas Lohe",
    text: "Riche humainement et professionnellement ! J'ai trouvé ma voie. Contenu complet, ambiance incroyable.",
    rating: 5,
  },
  {
    name: "L A",
    text: "Magnifique moment. Yohaqîne est très professionnelle. Gestes doux et précis, pleins de conseils.",
    rating: 5,
  },
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card flex min-w-[320px] flex-col gap-4 rounded-2xl p-6 md:min-w-[380px]"
  >
    {/* Google Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Google Logo */}
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-xs text-muted-foreground">Google Review</span>
      </div>
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
    </div>

    {/* Review Text */}
    <p className="flex-1 font-body text-sm leading-relaxed text-foreground/90">
      "{review.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 border-t border-border/50 pt-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 font-display text-lg text-gold">
        {review.name.charAt(0)}
      </div>
      <div>
        <p className="font-medium text-foreground">{review.name}</p>
        <p className="text-xs text-muted-foreground">Client vérifié</p>
      </div>
    </div>
  </motion.div>
);

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (!isAutoScrolling || !scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => setIsAutoScrolling(false);
    const handleMouseLeave = () => {
      scrollPosition = scrollContainer.scrollLeft;
      setIsAutoScrolling(true);
    };
    const handleTouchStart = () => setIsAutoScrolling(false);
    const handleTouchEnd = () => {
      scrollPosition = scrollContainer.scrollLeft;
      setIsAutoScrolling(true);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isAutoScrolling]);

  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background Accent */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto mb-12 px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block font-body text-xs uppercase tracking-[0.3em] text-gold"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-light text-foreground md:text-4xl"
          >
            Ce qu'en disent nos <span className="text-gold">élèves</span>
          </motion.h2>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4 lg:px-12"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Spacer for centering */}
          <div className="min-w-[calc(50vw-200px)] shrink-0 lg:min-w-[calc(50vw-220px)]" />
          
          {reviews.map((review, index) => (
            <div key={review.name} style={{ scrollSnapAlign: "center" }}>
              <ReviewCard review={review} index={index} />
            </div>
          ))}

          {/* Spacer for centering */}
          <div className="min-w-[calc(50vw-200px)] shrink-0 lg:min-w-[calc(50vw-220px)]" />
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto mt-8 flex items-center justify-center gap-4 px-6"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="font-display text-2xl text-foreground">5.0</span>
          <span className="text-sm text-muted-foreground">sur Google</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
