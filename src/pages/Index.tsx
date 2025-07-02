
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-moroccan-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-4">
              Nos Produits Phares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une sélection raffinée de nos créations artisanales, alliant tradition marocaine et innovation culinaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stuffed Dates */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80"
                  alt="Dattes Fourrées"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-2">
                  Dattes Fourrées Premium
                </h3>
                <p className="text-muted-foreground mb-4">
                  Rose framboise, pistache, noix, coco... Découvrez nos saveurs authentiques
                </p>
                <Link to="/products">
                  <Button className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                    Découvrir
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Date Sugar */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-moroccan-cream to-moroccan-gold/20 flex items-center justify-center">
                <div className="text-6xl">🍯</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-2">
                  Sucre de Dattes Bio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Alternative naturelle au sucre blanc, riche en fibres et minéraux
                </p>
                <Link to="/products">
                  <Button className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                    Découvrir
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Custom Boxes */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-moroccan-green/20 to-moroccan-gold/20 flex items-center justify-center">
                <div className="text-6xl">🎁</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-2">
                  Coffrets Personnalisés
                </h3>
                <p className="text-muted-foreground mb-4">
                  Créez votre coffret unique pour vos occasions spéciales
                </p>
                <Link to="/customization">
                  <Button className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                    Personnaliser
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-6">
                L'Art de la Datte Marocaine
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fondée en 2023 à Casablanca, TAZEDATES puise ses racines dans la tradition berbère. 
                Notre nom vient de "Tazdayt", qui signifie palmier en amazigh, symbole de notre 
                attachement aux terres marocaines.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous modernisons les délices traditionnels à base de dattes tout en préservant 
                l'authenticité de notre patrimoine culinaire.
              </p>
              <Link to="/about">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-moroccan-gold text-moroccan-gold hover:bg-moroccan-gold hover:text-white"
                >
                  Découvrir notre histoire
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop&q=80"
                alt="Architecture marocaine"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-moroccan-gold/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-moroccan-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prêt à Savourer l'Excellence ?
          </h2>
          <p className="text-xl mb-8 text-moroccan-cream max-w-2xl mx-auto">
            Commandez dès maintenant et découvrez pourquoi nos clients tombent amoureux de nos créations artisanales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button 
                size="lg"
                className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold px-8"
              >
                Boutique en ligne
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-moroccan-cream text-moroccan-brown hover:bg-moroccan-cream hover:text-moroccan-brown"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
