
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina K.",
      location: "Paris",
      rating: 5,
      comment: "Ces dattes fourrées sont absolument délicieuses ! La qualité est exceptionnelle et on sent vraiment l'artisanat marocain. J'ai commandé plusieurs fois et c'est toujours parfait.",
      product: "Coffret Rose Framboise",
      date: "Mars 2024",
      avatar: "AK"
    },
    {
      id: 2,
      name: "Hassan M.",
      location: "Casablanca",
      rating: 5,
      comment: "En tant que Marocain, je peux dire que TAZEDATES a vraiment réussi à moderniser nos traditions sans perdre l'authenticité. Mes invités sont toujours impressionnés !",
      product: "Coffret Prestige",
      date: "Mars 2024",
      avatar: "HM"
    },
    {
      id: 3,
      name: "Sophie L.",
      location: "Lyon",
      rating: 5,
      comment: "J'ai découvert le sucre de dattes grâce à vous et c'est révolutionnaire ! Plus besoin de sucre blanc, mes pâtisseries ont un goût plus riche et naturel.",
      product: "Sucre de Dattes Bio",
      date: "Février 2024",
      avatar: "SL"
    },
    {
      id: 4,
      name: "Omar B.",
      location: "Rabat",
      rating: 5,
      comment: "Service client exceptionnel et produits de qualité premium. L'emballage est magnifique, parfait pour offrir. Je recommande vivement !",
      product: "Coffret Royal",
      date: "Février 2024",
      avatar: "OB"
    },
    {
      id: 5,
      name: "Marie D.",
      location: "Marseille",
      rating: 4,
      comment: "Très bonne découverte ! Les saveurs sont originales et bien équilibrées. Seul petit bémol : j'aimerais plus d'options véganes, mais sinon c'est parfait.",
      product: "Coffret Découverte",
      date: "Février 2024",
      avatar: "MD"
    },
    {
      id: 6,
      name: "Youssef A.",
      location: "Marrakech",
      rating: 5,
      comment: "Fier de voir une entreprise marocaine créer des produits d'une telle qualité. La livraison a été rapide et tout était parfaitement emballé.",
      product: "Pistache Royale",
      date: "Janvier 2024",
      avatar: "YA"
    },
    {
      id: 7,
      name: "Claire R.",
      location: "Toulouse",
      rating: 5,
      comment: "J'ai commandé pour un événement d'entreprise et tous mes collègues ont adoré ! Le service personnalisation est top, merci pour votre professionnalisme.",
      product: "Coffret Corporate",
      date: "Janvier 2024",
      avatar: "CR"
    },
    {
      id: 8,
      name: "Khalid J.",
      location: "Fès",
      rating: 5,
      comment: "Excellent travail ! Vous honorez notre patrimoine marocain tout en apportant une touche moderne. Mes enfants adorent vos créations.",
      product: "Coffret Famille",
      date: "Janvier 2024",
      avatar: "KJ"
    },
    {
      id: 9,
      name: "Nathalie P.",
      location: "Bordeaux",
      rating: 4,
      comment: "Produits délicieux et authentiques. J'ai été séduite par la démarche écologique avec le recyclage des noyaux. Continue comme ça !",
      product: "Coco Exotique",
      date: "Décembre 2023",
      avatar: "NP"
    }
  ];

  const stats = [
    { value: "4.8/5", label: "Note moyenne" },
    { value: "1,200+", label: "Avis clients" },
    { value: "95%", label: "Recommandations" },
    { value: "48h", label: "Livraison moyenne" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez ce que nos clients pensent de nos créations artisanales
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-moroccan-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-moroccan-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-moroccan-cream">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'text-moroccan-gold fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  {/* Product */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-moroccan-gold">
                      Produit acheté: {testimonial.product}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-moroccan-gold/20 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-moroccan-brown text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-moroccan-brown">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-moroccan-cream/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moroccan-brown mb-6">
            Rejoignez nos Clients Satisfaits
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez pourquoi tant de personnes font confiance à TAZEDATES pour leurs moments gourmands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop">
              <button className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold px-8 py-3 rounded-lg transition-colors">
                Commander maintenant
              </button>
            </a>
            <a href="/products">
              <button className="border border-moroccan-brown text-moroccan-brown hover:bg-moroccan-brown hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Découvrir nos produits
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
