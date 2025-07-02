
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      category: "Commandes & Livraison",
      questions: [
        {
          question: "Comment passer une commande ?",
          answer: "Vous pouvez passer commande directement sur notre boutique en ligne ou nous contacter par WhatsApp. Sélectionnez vos produits, ajoutez-les au panier et suivez les étapes de commande."
        },
        {
          question: "Quels sont les délais de livraison ?",
          answer: "Nous livrons dans toute la France en 24-48h pour les commandes passées avant 14h. La livraison est gratuite à partir de 50€ d'achat."
        },
        {
          question: "Livrez-vous à l'international ?",
          answer: "Oui, nous livrons en Europe et dans certains pays du Maghreb. Les frais de port et délais varient selon la destination. Contactez-nous pour plus d'informations."
        },
        {
          question: "Comment suivre ma commande ?",
          answer: "Vous recevrez un email avec un numéro de suivi dès l'expédition de votre commande. Vous pourrez suivre son acheminement en temps réel."
        }
      ]
    },
    {
      category: "Produits & Qualité",
      questions: [
        {
          question: "D'où viennent vos dattes ?",
          answer: "Nos dattes proviennent des meilleures palmeraies du Maroc, principalement de la région de Zagora et Erfoud, reconnues pour la qualité exceptionnelle de leurs dattes Medjool et Deglet Nour."
        },
        {
          question: "Vos produits sont-ils bio ?",
          answer: "Notre sucre de dattes est 100% bio et certifié. Pour nos dattes fourrées, nous utilisons des ingrédients naturels de première qualité, avec une démarche écoresponsable."
        },
        {
          question: "Quelle est la durée de conservation ?",
          answer: "Nos dattes fourrées se conservent 6 mois dans un endroit frais et sec. Le sucre de dattes se conserve jusqu'à 2 ans dans son emballage d'origine."
        },
        {
          question: "Comment conserver mes dattes ?",
          answer: "Conservez vos dattes dans un endroit frais et sec, à l'abri de la lumière. Une fois ouvertes, placez-les au réfrigérateur dans un récipient hermétique."
        }
      ]
    },
    {
      category: "Coffrets Personnalisés",
      questions: [
        {
          question: "Puis-je personnaliser mon coffret ?",
          answer: "Absolument ! Utilisez notre outil de personnalisation en ligne pour choisir vos saveurs, la taille du coffret, et ajouter un message personnalisé."
        },
        {
          question: "Quel est le délai pour un coffret personnalisé ?",
          answer: "Les coffrets personnalisés nécessitent 2-3 jours ouvrés de préparation supplémentaires. Nous vous confirmerons la date de livraison lors de votre commande."
        },
        {
          question: "Peut-on ajouter un logo d'entreprise ?",
          answer: "Oui, nous proposons des options de personnalisation pour les entreprises, incluant l'ajout de votre logo sur l'emballage. Contactez-nous pour un devis personnalisé."
        }
      ]
    },
    {
      category: "Allergènes & Santé",
      questions: [
        {
          question: "Quels allergènes contiennent vos produits ?",
          answer: "Nos dattes fourrées contiennent des fruits à coque (amandes, pistaches, noix). Nos ateliers manipulent également du gluten et du sésame. Toutes les informations sont détaillées sur chaque fiche produit."
        },
        {
          question: "Vos produits conviennent-ils aux diabétiques ?",
          answer: "Notre sucre de dattes a un index glycémique plus bas que le sucre blanc, mais reste un sucrant naturel. Nous recommandons de consulter votre médecin pour une consommation adaptée."
        },
        {
          question: "Les dattes sont-elles compatibles avec un régime vegan ?",
          answer: "Oui, toutes nos dattes fourrées et notre sucre de dattes sont 100% végétaux et conviennent parfaitement aux régimes vegan et végétariens."
        }
      ]
    },
    {
      category: "Retours & Remboursements",
      questions: [
        {
          question: "Quelle est votre politique de retour ?",
          answer: "Nous offrons un délai de 14 jours pour les retours, sous réserve que les produits soient dans leur emballage d'origine et non entamés, pour des raisons d'hygiène alimentaire."
        },
        {
          question: "Comment procéder à un retour ?",
          answer: "Contactez notre service client par email ou téléphone. Nous vous fournirons une étiquette de retour prépayée et vous guiderons dans la procédure."
        },
        {
          question: "Que faire si ma commande arrive endommagée ?",
          answer: "Prenez des photos du colis et du contenu endommagé, puis contactez-nous immédiatement. Nous procéderons à un remplacement ou remboursement dans les plus brefs délais."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trouvez rapidement les réponses à vos questions les plus fréquentes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6 flex items-center">
                <div className="w-8 h-8 bg-moroccan-gold rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {categoryIndex + 1}
                </div>
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-moroccan-cream/50 rounded-lg px-6 hover:border-moroccan-gold/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-medium text-moroccan-brown hover:text-moroccan-gold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-moroccan-cream/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-moroccan-brown mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold px-6 py-3 rounded-lg transition-colors">
                  Nous contacter
                </button>
              </a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                <button className="border border-moroccan-green text-moroccan-green hover:bg-moroccan-green hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
