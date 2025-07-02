
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Recettes Gourmandes avec nos Dattes Fourrées",
      excerpt: "Découvrez comment incorporer nos dattes dans vos desserts préférés pour une touche marocaine authentique.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop&q=80",
      category: "Recettes",
      date: "15 Mars 2024",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Les Bienfaits du Sucre de Dattes sur la Santé",
      excerpt: "Alternative naturelle au sucre blanc, découvrez pourquoi le sucre de dattes est meilleur pour votre santé.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop&q=80",
      category: "Santé",
      date: "12 Mars 2024",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "L'Art de la Dégustation des Dattes au Maroc",
      excerpt: "Plongez dans les traditions marocaines et apprenez à apprécier pleinement nos créations artisanales.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop&q=80",
      category: "Culture",
      date: "8 Mars 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Dans les Coulisses de notre Atelier",
      excerpt: "Découvrez comment nos artisans créent chaque datte fourrée avec passion et savoir-faire traditionnel.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=600&h=400&fit=crop&q=80",
      category: "Artisanat",
      date: "5 Mars 2024",
      readTime: "8 min"
    },
    {
      id: 5,
      title: "Ramadan 2024 : Nos Coffrets Spéciaux",
      excerpt: "Célébrez le mois sacré avec nos créations spécialement conçues pour accompagner vos moments de partage.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop&q=80",
      category: "Actualités",
      date: "1 Mars 2024",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Agriculture Durable : Notre Engagement Écologique",
      excerpt: "Comment nous recyclons les noyaux de dattes en cosmétiques et soutenons une agriculture responsable.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop&q=80",
      category: "Environnement",
      date: "25 Février 2024",
      readTime: "6 min"
    }
  ];

  const categories = ["Tous", "Recettes", "Santé", "Culture", "Artisanat", "Actualités", "Environnement"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Notre Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez nos recettes, traditions et actualités autour de l'univers des dattes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tous" ? "default" : "outline"}
              className={category === "Tous" 
                ? "bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown" 
                : "border-moroccan-brown text-moroccan-brown hover:bg-moroccan-brown hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-8">Article à la une</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-moroccan-gold text-moroccan-dark-brown">
                      {blogPosts[0].category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].date} • {blogPosts[0].readTime} de lecture
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-moroccan-brown mb-4">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <Button className="self-start bg-moroccan-brown hover:bg-moroccan-brown/90 text-white">
                    Lire l'article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline" className="border-moroccan-gold text-moroccan-gold">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} de lecture
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-moroccan-brown mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-moroccan-gold hover:text-moroccan-brown hover:bg-moroccan-cream/50"
                  >
                    Lire plus →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-moroccan-cream to-moroccan-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-moroccan-brown mb-4">
                Restez informés de nos actualités
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, 
                recettes exclusives et offres spéciales directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-2 border border-moroccan-cream/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-moroccan-gold"
                />
                <Button className="bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold">
                  S'abonner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
