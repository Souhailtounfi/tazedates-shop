
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-moroccan-dark-brown text-moroccan-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold">
              TAZE<span className="text-moroccan-gold">DATES</span>
            </div>
            <p className="text-sm text-moroccan-cream/80">
              Savourez nos dattes, une douceur délicate. Artisanat marocain authentique depuis 2023.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-moroccan-cream hover:text-moroccan-gold">
                <span className="sr-only">Instagram</span>
                📷
              </Button>
              <Button variant="ghost" size="icon" className="text-moroccan-cream hover:text-moroccan-gold">
                <span className="sr-only">Facebook</span>
                📘
              </Button>
              <Button variant="ghost" size="icon" className="text-moroccan-cream hover:text-moroccan-gold">
                <span className="sr-only">WhatsApp</span>
                💬
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-moroccan-gold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-moroccan-gold transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-moroccan-gold transition-colors">Notre Histoire</Link></li>
              <li><Link to="/products" className="hover:text-moroccan-gold transition-colors">Produits</Link></li>
              <li><Link to="/customization" className="hover:text-moroccan-gold transition-colors">Personnaliser</Link></li>
              <li><Link to="/shop" className="hover:text-moroccan-gold transition-colors">Boutique</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-moroccan-gold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-moroccan-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-moroccan-gold transition-colors">Contact</Link></li>
              <li><Link to="/testimonials" className="hover:text-moroccan-gold transition-colors">Témoignages</Link></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Retours</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-moroccan-gold">Newsletter</h3>
            <p className="text-sm text-moroccan-cream/80">
              Restez informés de nos nouveautés et offres spéciales.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-moroccan-cream/10 border-moroccan-cream/20 text-moroccan-cream placeholder:text-moroccan-cream/60"
              />
              <Button className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-moroccan-cream/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-moroccan-cream/60">
            © 2024 TAZEDATES. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-moroccan-gold transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-moroccan-gold transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-moroccan-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
