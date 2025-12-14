import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.program": "Programme",
    "nav.pricing": "Tarifs",
    "nav.contact": "Contact",
    "nav.signup": "S'inscrire",

    // Hero
    "hero.preheadline": "L'Académie Spa Woda",
    "hero.headline1": "Ne faites pas que des soins.",
    "hero.headline2": "Créez des expériences.",
    "hero.subheadline": "Devenez l'élite du Head Spa avec une formation d'exception",
    "hero.cta.online": "Formation en ligne — 190€",
    "hero.cta.program": "Découvrir le programme",
    "hero.scroll": "Découvrir",

    // Why Section
    "why.label": "Pourquoi Nous Choisir",
    "why.title": "Une formation qui",
    "why.title.highlight": "transforme",
    "why.feature1.title": "Rentabilité",
    "why.feature1.subtitle": "ROI Exceptionnel",
    "why.feature1.description":
      "Un Head Spa se facture entre 80€ et 150€. Avec une formation à 190€, votre investissement est rentabilisé dès le 2ème client.",
    "why.feature2.title": "Expertise Japonaise",
    "why.feature2.subtitle": "Shiatsu & Massage",
    "why.feature2.description":
      "Maîtrisez les techniques ancestrales du shiatsu crânien, combinées aux protocoles modernes de trichologie pour des résultats visibles.",
    "why.feature3.title": "Certificat & Suivi",
    "why.feature3.subtitle": "Accompagnement Premium",
    "why.feature3.description":
      "Obtenez votre certification officielle et bénéficiez d'un suivi post-formation pour perfectionner votre pratique.",
    "why.feature4.title": "Communauté",
    "why.feature4.subtitle": "Réseau d'Experts",
    "why.feature4.description":
      "Rejoignez une communauté passionnée de professionnels du bien-être et partagez vos expériences.",
    "why.video.text": "Découvrez l'univers",

    // Instructor
    "instructor.label": "Votre Formatrice",
    "instructor.years": "Années d'expertise",
    "instructor.bio1":
      "Fondatrice de Spa Woda et pionnière du Head Spa en France, Yohaqîne a forgé son expertise au cœur de",
    "instructor.bio1.highlight": "l'hôtellerie de luxe",
    "instructor.bio1.end": "avant de se consacrer entièrement à l'art du soin capillaire japonais.",
    "instructor.bio2.start": "Sa méthode unique fusionne les techniques ancestrales du",
    "instructor.bio2.highlight": "Shiatsu crânien",
    "instructor.bio2.end":
      ", la science trichologique moderne et une approche holistique du bien-être. Chaque geste est pensé pour créer une expérience sensorielle inoubliable.",
    "instructor.bio3":
      "Plus qu'une formation, c'est une transmission : celle d'un savoir-faire d'exception et d'une philosophie où",
    "instructor.bio3.quote": '"chaque client devient une œuvre"',
    "instructor.credentials": "Shiatsu Certifié,Trichologie,Luxury Hospitality,Head Spa Expert",

    // Curriculum
    "curriculum.label": "Le Programme",
    "curriculum.title": "Un parcours",
    "curriculum.title.highlight": "complet",
    "curriculum.subtitle":
      "De la théorie à la pratique, maîtrisez chaque aspect du Head Spa pour offrir des expériences d'exception.",
    "curriculum.duration": "Durée :",
    "curriculum.module1.title": "Module 1 : Introduction au Head Spa",
    "curriculum.module1.duration": "1h30",
    "curriculum.module1.topics":
      "Histoire et philosophie du Head Spa japonais,Les bienfaits thérapeutiques et esthétiques,Comprendre les attentes clients,Créer une expérience sensorielle unique",
    "curriculum.module2.title": "Module 2 : Anatomie & Trichologie",
    "curriculum.module2.duration": "2h",
    "curriculum.module2.topics":
      "Anatomie du cuir chevelu et des follicules,Les différents types de cheveux et leurs besoins,Diagnostic capillaire approfondi,Pathologies courantes et solutions adaptées",
    "curriculum.module3.title": "Module 3 : Techniques de Massage",
    "curriculum.module3.duration": "3h",
    "curriculum.module3.topics":
      "Les bases du Shiatsu crânien,Pressions, effleurages et pétrissages,Techniques de relaxation profonde,Protocole signature Spa Woda",
    "curriculum.module4.title": "Module 4 : Rituels & Protocoles",
    "curriculum.module4.duration": "2h30",
    "curriculum.module4.topics":
      "Sélection et utilisation des huiles essentielles,Les outils professionnels du Head Spa,Déroulé complet d'une séance,Personnalisation selon les besoins clients",
    "curriculum.module5.title": "Module 5 : Expérience Client",
    "curriculum.module5.duration": "1h30",
    "curriculum.module5.topics":
      "Accueil et prise en charge du client,Communication et conseil personnalisé,Gestion des attentes et fidélisation,Créer une ambiance immersive",
    "curriculum.module6.title": "Module 6 : Certification & Pratique",
    "curriculum.module6.duration": "En présentiel",
    "curriculum.module6.topics":
      "Mise en situation réelle,Correction et perfectionnement des gestes,Évaluation finale,Remise du certificat Spa Woda",

    // Reviews
    "reviews.label": "Témoignages",
    "reviews.title": "Ce qu'en disent nos",
    "reviews.title.highlight": "élèves disent",
    "reviews.verified": "Client vérifié",
    "reviews.on": "sur Google",

    // Pricing
    "pricing.label": "Votre Formation",
    "pricing.title": "Choisissez votre",
    "pricing.title.highlight": "parcours",
    "pricing.digital.name": "Digital",
    "pricing.digital.subtitle": "100% en ligne",
    "pricing.digital.payment": "paiement unique",
    "pricing.digital.offer": "Offre limitée jusqu'au 31/12/2025",
    "pricing.digital.features":
      "Accès immédiat et illimité,10+ heures de vidéo HD,Supports PDF téléchargeables,Accès au groupe privé,Certificat de formation,Mises à jour gratuites",
    "pricing.digital.cta": "Commencer immédiatement",
    "pricing.immersion.name": "Immersion",
    "pricing.immersion.subtitle": "1 Journée à Lyon",
    "pricing.immersion.payment": "tout inclus",
    "pricing.immersion.offer": "Offre limitée jusqu'au 31/12/2025",
    "pricing.immersion.features":
      "Formation en ligne incluse,1 journée intensive en présentiel,Pratique sur modèles réels,Correction personnalisée,Suivi post-formation illimité",
    "pricing.immersion.cta.program": "Voir le programme",
    "pricing.immersion.cta.apply": "Candidater",
    "pricing.recommended": "Recommandé",

    // Contact
    "contact.label": "Besoin de conseils ?",
    "contact.title": "Réservez un appel",
    "contact.title.highlight": "découverte",
    "contact.subtitle":
      "Vous hésitez entre le Digital et le Présentiel ? Discutons de votre projet pour trouver la formule idéale.",
    "contact.name.label": "Votre nom",
    "contact.name.placeholder": "Marie Dupont",
    "contact.name.error": "Le nom doit contenir au moins 2 caractères",
    "contact.email.label": "Votre email",
    "contact.email.placeholder": "marie@example.com",
    "contact.email.error": "Email invalide",
    "contact.phone.label": "Téléphone",
    "contact.phone.placeholder": "+33 6 12 34 56 78",
    "contact.phone.error": "Numéro de téléphone invalide",
    "contact.preference.label": "Formule souhaitée",
    "contact.preference.placeholder": "Sélectionnez une option",
    "contact.preference.online": "Formation en ligne (190€)",
    "contact.preference.onsite": "Formation en présentiel (594€)",
    "contact.preference.error": "Veuillez sélectionner une préférence",
    "contact.submit": "Réserver mon appel",
    "contact.submitting": "Envoi en cours...",
    "contact.success.title": "Demande envoyée !",
    "contact.success.description": "Nous vous recontacterons très prochainement.",
    "contact.error.title": "Erreur",
    "contact.error.description": "Une erreur est survenue. Veuillez réessayer.",

    // Footer
    "footer.tagline": "L'Académie du Head Spa d'Excellence",
    "footer.discover": "Découvrir le Spa Woda →",
    "footer.rights": "Tous droits réservés.",

    // Mobile Sticky
    "mobile.training": "Formation 190€",
    "mobile.apply": "Candidater",
  },
  en: {
    // Navigation
    "nav.program": "Program",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.signup": "Sign Up",

    // Hero
    "hero.preheadline": "Spa Woda Academy",
    "hero.headline1": "Don't simply provide treatments.",
    "hero.headline2": "Create experiences.",
    "hero.subheadline": "Become a Head Spa elite with exceptional training",
    "hero.cta.online": "Online Training — €190",
    "hero.cta.program": "Discover the Program",
    "hero.scroll": "Discover",

    // Why Section
    "why.label": "Why Choose Us",
    "why.title": "A training that",
    "why.title.highlight": "transforms",
    "why.feature1.title": "Profitability",
    "why.feature1.subtitle": "Exceptional ROI",
    "why.feature1.description":
      "A Head Spa session is priced between €80 and €150. With training at €190, your investment pays off from the 2nd client.",
    "why.feature2.title": "Japanese Expertise",
    "why.feature2.subtitle": "Shiatsu & Massage",
    "why.feature2.description":
      "Master ancestral cranial shiatsu techniques, combined with modern trichology protocols for visible results.",
    "why.feature3.title": "Certificate & Support",
    "why.feature3.subtitle": "Premium Coaching",
    "why.feature3.description":
      "Obtain your official certification and benefit from post-training follow-up to perfect your practice.",
    "why.feature4.title": "Community",
    "why.feature4.subtitle": "Expert Network",
    "why.feature4.description": "Join a passionate community of wellness professionals and share your experiences.",
    "why.video.text": "Discover the universe of",

    // Instructor
    "instructor.label": "Your Instructor",
    "instructor.years": "Years of expertise",
    "instructor.bio1":
      "Founder of Spa Woda and pioneer of Head Spa in France, Yohaqîne forged her expertise at the heart of",
    "instructor.bio1.highlight": "luxury hospitality",
    "instructor.bio1.end": "before devoting herself entirely to the art of Japanese hair care.",
    "instructor.bio2.start": "Her unique method fuses ancestral techniques of",
    "instructor.bio2.highlight": "cranial Shiatsu",
    "instructor.bio2.end":
      ", modern trichological science and a holistic approach to well-being. Every gesture is designed to create an unforgettable sensory experience.",
    "instructor.bio3": "More than training, it's a transmission: that of exceptional expertise and a philosophy where",
    "instructor.bio3.quote": '"each client becomes a masterpiece"',
    "instructor.credentials": "Certified Shiatsu,Trichology,Luxury Hospitality,Head Spa Expert",

    // Curriculum
    "curriculum.label": "The Program",
    "curriculum.title": "A",
    "curriculum.title.highlight": "complete journey",
    "curriculum.subtitle":
      "From theory to practice, master every aspect of Head Spa to deliver exceptional experiences.",
    "curriculum.duration": "Duration:",
    "curriculum.module1.title": "Module 1: Introduction to Head Spa",
    "curriculum.module1.duration": "1h30",
    "curriculum.module1.topics":
      "History and philosophy of Japanese Head Spa,Therapeutic and aesthetic benefits,Understanding client expectations,Creating a unique sensory experience",
    "curriculum.module2.title": "Module 2: Anatomy & Trichology",
    "curriculum.module2.duration": "2h",
    "curriculum.module2.topics":
      "Scalp and follicle anatomy,Different hair types and their needs,In-depth hair diagnosis,Common conditions and tailored solutions",
    "curriculum.module3.title": "Module 3: Massage Techniques",
    "curriculum.module3.duration": "3h",
    "curriculum.module3.topics":
      "Fundamentals of cranial Shiatsu,Pressure, effleurage and kneading,Deep relaxation techniques,Spa Woda signature protocol",
    "curriculum.module4.title": "Module 4: Rituals & Protocols",
    "curriculum.module4.duration": "2h30",
    "curriculum.module4.topics":
      "Selection and use of essential oils,Professional Head Spa tools,Complete session flow,Personalization based on client needs",
    "curriculum.module5.title": "Module 5: Client Experience",
    "curriculum.module5.duration": "1h30",
    "curriculum.module5.topics":
      "Welcome and client care,Communication and personalized advice,Managing expectations and loyalty,Creating an immersive atmosphere",
    "curriculum.module6.title": "Module 6: Certification & Practice",
    "curriculum.module6.duration": "In-person",
    "curriculum.module6.topics":
      "Real-world practice sessions,Gesture correction and refinement,Final evaluation,Spa Woda certificate delivery",

    // Reviews
    "reviews.label": "Testimonials",
    "reviews.title": "What our",
    "reviews.title.highlight": "students say",
    "reviews.verified": "Verified client",
    "reviews.on": "on Google",

    // Pricing
    "pricing.label": "Your Training",
    "pricing.title": "Choose your",
    "pricing.title.highlight": "path",
    "pricing.digital.name": "Digital",
    "pricing.digital.subtitle": "100% online",
    "pricing.digital.payment": "one-time payment",
    "pricing.digital.offer": "Limited offer until 12/31/2025",
    "pricing.digital.features":
      "Immediate and unlimited access,10+ hours of HD video,Downloadable PDF materials,Private group access,Training certificate,Free updates",
    "pricing.digital.cta": "Start immediately",
    "pricing.immersion.name": "Immersion",
    "pricing.immersion.subtitle": "1 Day in Lyon",
    "pricing.immersion.payment": "all inclusive",
    "pricing.immersion.offer": "Limited offer until 12/31/2025",
    "pricing.immersion.features":
      "Online training included,1 intensive in-person day,Practice on real models,Personalized feedback,Unlimited post-training support",
    "pricing.immersion.cta.program": "See the program",
    "pricing.immersion.cta.apply": "Apply",
    "pricing.recommended": "Recommended",

    // Contact
    "contact.label": "Need advice?",
    "contact.title": "Book a",
    "contact.title.highlight": "discovery call",
    "contact.subtitle": "Unsure between Digital and In-Person? Let's discuss your project to find the ideal formula.",
    "contact.name.label": "Your name",
    "contact.name.placeholder": "Jane Smith",
    "contact.name.error": "Name must contain at least 2 characters",
    "contact.email.label": "Your email",
    "contact.email.placeholder": "jane@example.com",
    "contact.email.error": "Invalid email",
    "contact.phone.label": "Phone",
    "contact.phone.placeholder": "+1 555 123 4567",
    "contact.phone.error": "Invalid phone number",
    "contact.preference.label": "Preferred formula",
    "contact.preference.placeholder": "Select an option",
    "contact.preference.online": "Online training (€190)",
    "contact.preference.onsite": "In-person training (€594)",
    "contact.preference.error": "Please select a preference",
    "contact.submit": "Book my call",
    "contact.submitting": "Sending...",
    "contact.success.title": "Request sent!",
    "contact.success.description": "We will contact you very soon.",
    "contact.error.title": "Error",
    "contact.error.description": "An error occurred. Please try again.",

    // Footer
    "footer.tagline": "The Academy of Head Spa Excellence",
    "footer.discover": "Discover Spa Woda →",
    "footer.rights": "All rights reserved.",

    // Mobile Sticky
    "mobile.training": "Training €190",
    "mobile.apply": "Apply",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
