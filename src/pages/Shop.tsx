
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Star } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Rose Framboise",
      price: 29.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.8,
      isNew: true,
      category: "dattes"
    },
    {
      id: 2,
      name: "Pistache Royale",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.9,
      isBestSeller: true,
      category: "dattes"
    },
    {
      id: 3,
      name: "Sucre de Dattes Bio",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.7,
      category: "sucre"
    },
    {
      id: 4,
      name: "Coffret Découverte",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.8,
      category: "coffrets"
    },
    {
      id: 5,
      name: "Noix & Miel",
      price: 31.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.7,
      category: "dattes"
    },
    {
      id: 6,
      name: "Coffret Prestige",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.9,
      isBestSeller: true,
      category: "coffrets"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Boutique
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez tous nos produits artisanaux et commandez en ligne
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Rechercher un produit..." 
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline" className="border-moroccan-gold text-moroccan-gold hover:bg-moroccan-gold hover:text-white">
              Tous
            </Button>
            <Button variant="outline">Dattes Fourrées</Button>
            <Button variant="outline">Sucre de Dattes</Button>
            <Button variant="outline">Coffrets</Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {product.isNew && (
                <Badge className="absolute top-4 left-4 z-10 bg-moroccan-green text-white">
                  Nouveau
                </Badge>
              )}
              {product.isBestSeller && (
                <Badge className="absolute top-4 left-4 z-10 bg-moroccan-gold text-moroccan-dark-brown">
                  Best Seller
                </Badge>
              )}
              
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-moroccan-gold fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-moroccan-gold">
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}€
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link to={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-moroccan-brown text-moroccan-brown hover:bg-moroccan-brown hover:text-white">
                      Voir détails
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        <Card className="max-w-md ml-auto">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-moroccan-brown mb-4">
              Panier (3 articles)
            </h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span>Rose Framboise x1</span>
                <span>29.99€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sucre de Dattes x2</span>
                <span>39.98€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Coffret Découverte x1</span>
                <span>39.99€</span>
              </div>
            </div>
            
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>109.96€</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Frais de livraison</span>
                <span>Gratuit</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-moroccan-gold">
                <span>Total</span>
                <span>109.96€</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold">
              Procéder au paiement
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Paiement sécurisé • Livraison 24-48h • Satisfait ou remboursé
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
