import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden moroccan-pattern">
      {/* Background Image */}
      <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.4), rgba(139, 69, 19, 0.6)), url('./assets/Picture1.png')`,
        backgroundPosition: "center bottom", // Changed from center to bottom
      }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-shadow">
        Savourez nos dattes,
        <br />
        <span className="text-moroccan-gold">une douceur délicate</span>
        </h1>

        <p className="text-xl md:text-2xl font-light leading-relaxed text-moroccan-cream max-w-2xl mx-auto">
        Découvrez l'artisanat marocain authentique avec nos dattes fourrées
        premium et sucre de dattes 100% naturel
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <Link to="/products">
          <Button
          size="lg"
          className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
          Découvrir nos produits
          </Button>
        </Link>

        <Link to="/shop">
          <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-black hover:bg-white hover:text-moroccan-dark-brown font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
          Commander maintenant
          </Button>
        </Link>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl md:text-4xl font-serif font-bold text-moroccan-gold">
          100%
          </div>
          <div className="text-sm uppercase tracking-wide">Naturel</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl md:text-4xl font-serif font-bold text-moroccan-gold">
          2023
          </div>
          <div className="text-sm uppercase tracking-wide">
          Fondé à Settat
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl md:text-4xl font-serif font-bold text-moroccan-gold">
          ♡
          </div>
          <div className="text-sm uppercase tracking-wide">
          Fait avec amour
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
