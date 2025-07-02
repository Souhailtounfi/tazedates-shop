import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              L'aventure TAZEDATES : de la passion berbère à l'excellence
              artisanale moderne
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-moroccan-brown mb-6">
                Nées de la Tradition Berbère
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fondée en 2023 à Casablanca par des entrepreneurs marocains
                passionnés, TAZEDATES tire son nom de "Tazdayt", qui signifie
                palmier en amazigh. Ce choix reflète notre profond attachement
                aux terres marocaines et à notre patrimoine millénaire.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre mission est claire : moderniser les délices traditionnels
                à base de dattes tout en préservant l'authenticité de la culture
                culinaire marocaine. Chaque produit raconte une histoire, celle
                de notre terroir et de nos ancêtres.
              </p>
            </div>
            <div className="relative">
              <img
                src="./assets/Desert.png"
                alt="Désert marocain"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌴</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Authenticité
                </h3>
                <p className="text-muted-foreground">
                  Nous puisons dans les traditions séculaires du Maroc pour
                  créer des produits qui honorent notre héritage culturel.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Chaque datte est sélectionnée avec soin, chaque recette
                  perfectionnée pour offrir une expérience gustative
                  exceptionnelle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Durabilité
                </h3>
                <p className="text-muted-foreground">
                  Nous recyclons même les noyaux de dattes en cosmétiques, dans
                  une démarche respectueuse de l'environnement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="./assets/encg.png"
                alt="encg Settat"
                className="rounded-lg shadow-xl w-full max-w-lg lg:max-w-xl"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-moroccan-brown mb-6">
                Notre Savoir-Faire
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-moroccan-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-moroccan-brown">
                      Sélection Rigoureuse
                    </h4>
                    <p className="text-muted-foreground">
                      Nous parcourons les régions du Maroc pour sélectionner les
                      meilleures dattes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-moroccan-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-moroccan-brown">
                      Préparation Artisanale
                    </h4>
                    <p className="text-muted-foreground">
                      Chaque datte est préparée à la main selon nos recettes
                      secrètes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-moroccan-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-moroccan-brown">
                      Emballage Premium
                    </h4>
                    <p className="text-muted-foreground">
                      Conditionnement soigné dans des coffrets élégants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-moroccan-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-4">
              Notre Équipe Passionnée
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des artisans dévoués qui perpétuent la tradition tout en innovant
              pour l'avenir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-8">
                  <div className="w-27 h-27  rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      className="rounded-3xl"
                      src="./assets/pfp.jpeg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-2">
                    Zakaria Sebgui
                  </h3>
                  <p className="text-muted-foreground">
                    Etudiant a l'ENCG SETTAT, membre de création de dattes
                    fourrées.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
