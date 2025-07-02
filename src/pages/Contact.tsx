
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6">
                Envoyez-nous un message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" placeholder="Votre prénom" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" placeholder="Votre nom" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+212 6 00 00 00 00" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Objet de votre message" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande en détail..."
                    className="mt-2 min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-moroccan-brown mb-6">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-moroccan-brown">Adresse</h4>
                      <p className="text-muted-foreground">
                        123 Boulevard Mohammed V<br />
                        Settat 20000<br />
                        Maroc
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-moroccan-brown">Téléphone</h4>
                      <p className="text-muted-foreground">+212 5 22 00 00 00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h4 className="font-semibold text-moroccan-brown">Email</h4>
                      <p className="text-muted-foreground">contact@tazedates.ma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💬</div>
                    <div>
                      <h4 className="font-semibold text-moroccan-brown">WhatsApp</h4>
                      <p className="text-muted-foreground">+212 6 00 00 00 00</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 border-moroccan-green text-moroccan-green hover:bg-moroccan-green hover:text-white"
                      >
                        Ouvrir WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-moroccan-brown mb-6">
                  Horaires d'ouverture
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium text-muted-foreground">Fermé</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-moroccan-cream/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Nos équipes répondent aux messages dans les 24h ouvrées. 
                    Pour les commandes urgentes, contactez-nous directement par WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-moroccan-brown mb-6">
                  Notre localisation
                </h3>
                
                <div className="aspect-video bg-moroccan-cream/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Carte Google Maps</p>
                    <p className="text-sm">123 Boulevard Mohammed V, Settat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
