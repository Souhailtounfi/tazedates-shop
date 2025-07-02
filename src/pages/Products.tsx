
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Products = () => {
  const stuffedDates = [
    {
      id: 1,
      name: "Rose Framboise",
      description: "Dattes fourrées à la rose et framboises, un mariage délicat et parfumé",
      price: "29.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Pistache Royale",
      description: "Dattes premium fourrées aux pistaches grillées du Maroc",
      price: "34.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: 3,
      name: "Noix & Miel",
      description: "Alliance parfaite entre noix croquantes et miel d'acacia",
      price: "31.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.7
    },
    {
      id: 4,
      name: "Coco Exotique",
      description: "Dattes fourrées à la noix de coco râpée et vanille bourbon",
      price: "28.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.6
    },
    {
      id: 5,
      name: "Biscuit Spéculoos",
      description: "Innovation gourmande avec des biscuits spéculoos artisanaux",
      price: "32.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.8,
      isNew: true
    },
    {
      id: 6,
      name: "Amandes Pralinées",
      description: "Dattes fourrées aux amandes pralinées à l'ancienne",
      price: "33.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
      rating: 4.7
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
              Nos Produits
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez notre gamme complète de dattes fourrées artisanales et sucre de dattes bio
            </p>
          </div>
        </div>
      </section>

      {/* Stuffed Dates Section */}
      <section id="stuffed-dates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-4">
              Dattes Fourrées Premium
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque datte est sélectionnée avec soin et fourrée à la main selon nos recettes artisanales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stuffedDates.map((product) => (
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
                  
                  <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-moroccan-gold">
                      {product.price}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <Button className="bg-moroccan-brown hover:bg-moroccan-brown/90 text-white">
                        Voir détails
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Date Sugar Section */}
      <section id="date-sugar" className="py-16 bg-moroccan-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-6">
                Sucre de Dattes Bio
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Notre sucre de dattes 100% naturel est une alternative saine au sucre blanc. 
                Riche en fibres, potassium et antioxydants, il possède un index glycémique 
                plus bas que le sucre traditionnel.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-moroccan-gold rounded-full"></div>
                  <span>100% naturel, sans additifs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-moroccan-gold rounded-full"></div>
                  <span>Riche en fibres et minéraux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-moroccan-gold rounded-full"></div>
                  <span>Index glycémique plus bas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-moroccan-gold rounded-full"></div>
                  <span>Parfait pour pâtisseries et boissons</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-moroccan-gold">19.99€</span>
                <Button className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                  Ajouter au panier
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-moroccan-cream to-moroccan-gold/20 rounded-lg p-12 text-center">
                <div className="text-8xl mb-4">🍯</div>
                <h3 className="text-2xl font-serif font-bold text-moroccan-brown mb-4">
                  Sucre de Dattes Premium
                </h3>
                <p className="text-muted-foreground">
                  500g de pure douceur naturelle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Boxes Section */}
      <section id="gift-boxes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-4">
              Coffrets Cadeaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offrez une expérience gustative unique avec nos coffrets élégamment présentés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Coffret Découverte
                </h3>
                <p className="text-muted-foreground mb-4">
                  6 dattes fourrées de saveurs différentes
                </p>
                <div className="text-2xl font-bold text-moroccan-gold mb-4">39.99€</div>
                <Button className="w-full bg-moroccan-brown hover:bg-moroccan-brown/90 text-white">
                  Commander
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-moroccan-gold border-2">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-moroccan-gold text-moroccan-dark-brown">Populaire</Badge>
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Coffret Prestige
                </h3>
                <p className="text-muted-foreground mb-4">
                  12 dattes fourrées premium + sucre de dattes
                </p>
                <div className="text-2xl font-bold text-moroccan-gold mb-4">69.99€</div>
                <Button className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown">
                  Commander
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Coffret Royal
                </h3>
                <p className="text-muted-foreground mb-4">
                  24 dattes fourrées d'exception + accessoires
                </p>
                <div className="text-2xl font-bold text-moroccan-gold mb-4">129.99€</div>
                <Button className="w-full bg-moroccan-brown hover:bg-moroccan-brown/90 text-white">
                  Commander
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
