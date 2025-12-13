import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MentionsLegalesModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-xs text-muted-foreground/60 hover:text-gold transition-colors underline-offset-2 hover:underline">
        Mentions légales
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[80vh]">
      <DialogHeader>
        <DialogTitle className="font-display text-xl">Mentions légales et politique de confidentialité</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>
            L'entreprise individuelle Spa Woda, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d'actions à la disposition des individus afin qu'ils puissent au mieux exercer leurs droits.
          </p>
          <p>
            Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://www.cnil.fr/</a>
          </p>
          <p>
            La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent. La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.
          </p>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 1 - Mentions légales</h3>
            <p><strong>1.1 Site (ci-après « le site »):</strong> formationheadspapro.com</p>
            <p className="mt-2"><strong>1.2 Éditeur (ci-après l'éditeur):</strong></p>
            <p>L'entreprise individuelle : Spa Woda</p>
            <p>Située: 87 rue pierre Audry 69009 LYON</p>
            <p>dont le numéro de SIREN est le : 925 238 990</p>
            <p>n° de téléphone : 0666111726</p>
            <p>adresse mail: spawoda@outlook.fr</p>
            <p className="mt-2"><strong>1.3 Hébergeur (ci-après l'hébergeur):</strong></p>
            <p>spawoda.fr est hébergé par IONOS, dont le siège social est situé 7 Place de la gare, 57200 Sarreguemines, France</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 2 - Accès au site</h3>
            <p>L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 3 - Contenu du site</h3>
            <p>Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 4 - Gestion du site</h3>
            <p>Pour la bonne gestion du site, l'éditeur pourra à tout moment :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>suspendre, interrompre ou limiter l'accès à tout ou partie du site</li>
              <li>réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes</li>
              <li>supprimer toute information pouvant perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales</li>
              <li>suspendre le site afin de procéder à des mises à jour</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 5 - Responsabilités</h3>
            <p>La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.</p>
            <p className="mt-2">Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 6 - Liens hypertextes</h3>
            <p>La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisée par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur. Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 7 - Collecte et protection des données</h3>
            <p>Vos données sont collectées par L'entreprise individuelle Spa Woda.</p>
            <p className="mt-2">Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée): est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.</p>
            <p className="mt-2">Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 8 - Droit d'accès, de rectification et de déréférencement de vos données</h3>
            <p>En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>le droit d'accès</li>
              <li>le droit de rectification</li>
              <li>le droit de suppression des données</li>
              <li>le droit à la limitation du traitement</li>
              <li>le droit de s'opposer au traitement des données</li>
              <li>le droit à la portabilité</li>
            </ul>
            <p className="mt-2">Vous pouvez exercer ce droit en nous contactant à l'adresse : 87 RUE PIERRE AUDRY 69009 LYON ou par email à spawoda@outlook.fr</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 9 - Utilisation des données</h3>
            <p>Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sûr.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 10 - Politique de conservation des données</h3>
            <p>La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 11 - Partage des données personnelles avec des tiers</h3>
            <p>Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l'Union européenne, dans les cas prévus par la loi.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 12 - Offres commerciales</h3>
            <p>Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le souhaitez pas, veuillez nous contacter à l'adresse suivante : spawoda@outlook.fr</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 13 - Cookies</h3>
            <p>Un "Cookie" ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone..) et lu par exemple lors de la consultation d'un site internet.</p>
            <p className="mt-2">Pour plus d'informations sur l'utilisation, la gestion et la suppression des cookies, nous vous invitons à consulter le lien suivant : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser</a></p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 14 - Photographies et représentation des produits</h3>
            <p>Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 15 - Loi applicable</h3>
            <p>Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">Article 16 - Contactez-nous</h3>
            <p>Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante : spawoda@outlook.fr</p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const CGVModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-xs text-muted-foreground/60 hover:text-gold transition-colors underline-offset-2 hover:underline">
        Conditions générales de vente
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl max-h-[80vh]">
      <DialogHeader>
        <DialogTitle className="font-display text-xl">Conditions Générales de Vente – School Woda</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground">
          <section>
            <h3 className="font-semibold text-foreground mb-2">1. Présentation</h3>
            <p>Les présentes conditions générales de vente (CGV) s'appliquent à toutes les ventes de formations en ligne proposées par School Woda, géré par Yohaqîne Chopin, via le site www.spawoda.fr.</p>
            <p className="mt-2">En commandant une formation, le client reconnaît avoir pris connaissance des présentes CGV et les accepte sans réserve.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">2. Produits concernés</h3>
            <p>Les formations proposées sont des contenus numériques accessibles en ligne, sous forme de vidéos, fichiers téléchargeables, textes explicatifs et outils pédagogiques.</p>
            <p className="mt-2">Ces produits ne sont pas fournis sur support physique.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">3. Commandes</h3>
            <p>Toute commande passée via la plateforme de vente (Learnbox, Planity ou autre) est ferme et définitive.</p>
            <p className="mt-2">L'accès à la formation est accordé dès validation du paiement, sauf en cas de paiement en plusieurs fois, auquel cas l'accès est progressif ou partiel selon les modalités définies.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">4. Tarifs</h3>
            <p>Les prix sont indiqués en euros, toutes taxes comprises (TTC).</p>
            <p className="mt-2">School Woda se réserve le droit de modifier ses tarifs à tout moment, mais les formations sont facturées sur la base des tarifs en vigueur au moment de la commande.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">5. Paiement</h3>
            <p>Le règlement s'effectue via les moyens sécurisés proposés sur la plateforme (carte bancaire, virement, ou paiement en plusieurs fois si proposé).</p>
            <p className="mt-2">En cas d'impayé ou de rejet de paiement, l'accès à la formation pourra être suspendu ou révoqué.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">6. Droit de rétractation</h3>
            <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas à la fourniture de contenus numériques lorsqu'ils sont accessibles immédiatement après l'achat.</p>
            <p className="mt-2 font-medium text-foreground">➡️ Ainsi, toute formation achetée, dont l'accès a été ouvert, est considérée comme consommée et ne peut faire l'objet d'un remboursement.</p>
            <p className="mt-2">Avant tout achat, l'acheteur est invité à lire attentivement la fiche descriptive de la formation, qui détaille de manière transparente les modules, objectifs et thématiques abordées.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">7. Propriété intellectuelle</h3>
            <p>L'ensemble des contenus proposés (textes, vidéos, documents, visuels) est la propriété exclusive de School Woda – Yohaqîne Chopin.</p>
            <p className="mt-2">Toute reproduction, diffusion, revente ou partage non autorisé, même partiel, est strictement interdit et fera l'objet de poursuites.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">8. Responsabilités</h3>
            <p>School Woda ne peut être tenue pour responsable de l'inadéquation de la formation aux objectifs personnels de l'apprenant, en cas de mauvaise évaluation de ses besoins préalables.</p>
            <p className="mt-2">Aucun résultat professionnel n'est garanti.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">9. Support et accompagnement</h3>
            <p>Une assistance est disponible par mail pour toute question liée à l'accès ou au contenu de la formation :</p>
            <p className="mt-2">📧 <a href="mailto:spawoda@outlook.fr" className="text-gold hover:underline">spawoda@outlook.fr</a></p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">10. Données personnelles</h3>
            <p>Les données collectées lors de l'achat sont utilisées uniquement à des fins de facturation, suivi client et communication pédagogique.</p>
            <p className="mt-2">Conformément au RGPD, vous pouvez demander à accéder, modifier ou supprimer vos données à tout moment.</p>
          </section>

          <section>
            <h3 className="font-semibold text-foreground mb-2">11. Droit applicable et juridiction compétente</h3>
            <p>Les présentes Conditions Générales de Vente sont régies par le droit français.</p>
            <p className="mt-2">En cas de litige relatif à l'interprétation, l'exécution ou la validité des présentes CGV, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);
