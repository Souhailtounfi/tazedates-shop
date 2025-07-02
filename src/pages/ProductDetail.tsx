
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Rose Framboise",
    description: "Dattes fourrées à la rose et framboises, un mariage délicat et parfumé",
    longDescription: "Nos dattes Rose Framboise sont le résultat d'un savoir-faire artisanal unique. Chaque datte Medjool premium est soigneusement dénoyautée puis fourrée à la main avec notre mélange signature de pétales de rose et de framboises lyophilisées. Cette création raffinée offre une expérience gustative exceptionnelle, alliant la douceur naturelle de la datte à la délicatesse florale de la rose et à l'acidité fruitée de la framboise.",
    price: 29.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviewCount: 127,
    images: [
      "./assets/Picture3.png",
    ],
    ingredients: [
      "Dattes Medjool premium",
      "Pétales de rose biologiques",
      "Framboises lyophilisées",
      "Sucre de dattes naturel"
    ],
    allergens: "Peut contenir des traces de fruits à coque",
    weight: "250g (environ 12 dattes)",
    storage: "À conserver dans un endroit frais et sec",
    isNew: true,
    inStock: true
  };

  const reviews = [
    {
      id: 1,
      name: "Amina K.",
      rating: 5,
      comment: "Absolument délicieux ! La combinaison rose-framboise est parfaite.",
      date: "15 Mars 2024"
    },
    {
      id: 2,
      name: "Hassan M.",
      rating: 5,
      comment: "Qualité exceptionnelle, j'ai offert ce coffret et tout le monde a adoré.",
      date: "10 Mars 2024"
    },
    {
      id: 3,
      name: "Fatima L.",
      rating: 4,
      comment: "Très bon produit, emballage soigné. Je recommande !",
      date: "5 Mars 2024"
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Pistache Royale",
      price: "34.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Noix & Miel",
      price: "31.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Coco Exotique",
      price: "28.99€",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8">
          <span>Accueil</span> / <span>Produits</span> / <span className="text-moroccan-brown font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-moroccan-cream/20">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-moroccan-gold' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.isNew && (
              <Badge className="bg-moroccan-green text-white">Nouveau</Badge>
            )}
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-moroccan-gold fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">({product.reviewCount} avis)</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-moroccan-gold">
                {product.price}€
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}€
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantité:</span>
              <div className="flex items-center border rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-moroccan-brown text-moroccan-brown hover:bg-moroccan-brown hover:text-white"
              >
                Acheter maintenant
              </Button>
            </div>

            {/* Product Details */}
            <div className="space-y-2 text-sm">
              <div><strong>Poids:</strong> {product.weight}</div>
              <div><strong>Conservation:</strong> {product.storage}</div>
              <div><strong>Allergènes:</strong> {product.allergens}</div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingrédients</TabsTrigger>
            <TabsTrigger value="reviews">Avis ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">{product.longDescription}</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ingredients" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-4">
                  Liste des ingrédients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-moroccan-gold rounded-full"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-moroccan-gold/20 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-moroccan-brown">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-moroccan-gold fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-moroccan-brown mb-8">
            Produits similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif font-semibold text-moroccan-brown mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-moroccan-gold">
                      {product.price}
                    </span>
                    <Button size="sm" className="bg-moroccan-brown hover:bg-moroccan-brown/90 text-white">
                      Voir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
