
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const Customization = () => {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [boxSize, setBoxSize] = useState("12");
  const [boxType, setBoxType] = useState("traditional");
  const [customMessage, setCustomMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [isGift, setIsGift] = useState(false);

  const flavors = [
    { id: "rose-framboise", name: "Rose Framboise", price: 2.5 },
    { id: "pistache", name: "Pistache Royale", price: 3.0 },
    { id: "noix-miel", name: "Noix & Miel", price: 2.8 },
    { id: "coco", name: "Coco Exotique", price: 2.4 },
    { id: "speculoos", name: "Biscuit Spéculoos", price: 2.7 },
    { id: "amandes", name: "Amandes Pralinées", price: 2.9 },
    { id: "orange", name: "Orange Confite", price: 2.6 },
    { id: "chocolat", name: "Chocolat Noir", price: 3.2 }
  ];

  const boxSizes = [
    { value: "6", label: "6 dattes", basePrice: 18 },
    { value: "12", label: "12 dattes", basePrice: 32 },
    { value: "24", label: "24 dattes", basePrice: 58 },
    { value: "36", label: "36 dattes", basePrice: 82 }
  ];

  const boxTypes = [
    { 
      value: "traditional", 
      label: "Coffret Traditionnel", 
      description: "Boîte en bois avec motifs marocains authentiques",
      extraPrice: 0
    },
    { 
      value: "premium", 
      label: "Coffret Premium", 
      description: "Boîte luxueuse avec finitions dorées",
      extraPrice: 8
    },
    { 
      value: "business", 
      label: "Coffret Corporate", 
      description: "Design élégant pour cadeaux d'entreprise",
      extraPrice: 12
    }
  ];

  const handleFlavorChange = (flavorId: string, checked: boolean) => {
    const maxFlavors = parseInt(boxSize);
    if (checked && selectedFlavors.length < maxFlavors) {
      setSelectedFlavors([...selectedFlavors, flavorId]);
    } else if (!checked) {
      setSelectedFlavors(selectedFlavors.filter(id => id !== flavorId));
    }
  };

  const calculateTotal = () => {
    const selectedBoxSize = boxSizes.find(size => size.value === boxSize);
    const selectedBoxType = boxTypes.find(type => type.value === boxType);
    const flavorPrices = selectedFlavors.reduce((total, flavorId) => {
      const flavor = flavors.find(f => f.id === flavorId);
      return total + (flavor?.price || 0);
    }, 0);
    
    return (selectedBoxSize?.basePrice || 0) + (selectedBoxType?.extraPrice || 0) + flavorPrices;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-moroccan-cream via-moroccan-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moroccan-brown mb-6">
              Personnalisez Votre Coffret
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Créez un coffret unique selon vos goûts et pour vos occasions spéciales
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Customization Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Box Size Selection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6">
                  1. Choisissez la taille de votre coffret
                </h2>
                <RadioGroup value={boxSize} onValueChange={setBoxSize}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {boxSizes.map((size) => (
                      <div key={size.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={size.value} id={size.value} />
                        <Label htmlFor={size.value} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-moroccan-cream/30 transition-colors">
                            <span className="font-medium">{size.label}</span>
                            <span className="text-moroccan-gold font-bold">{size.basePrice}€</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Flavor Selection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6">
                  2. Sélectionnez vos saveurs ({selectedFlavors.length}/{boxSize})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flavors.map((flavor) => (
                    <div key={flavor.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={flavor.id}
                        checked={selectedFlavors.includes(flavor.id)}
                        onCheckedChange={(checked) => handleFlavorChange(flavor.id, checked as boolean)}
                        disabled={!selectedFlavors.includes(flavor.id) && selectedFlavors.length >= parseInt(boxSize)}
                      />
                      <Label htmlFor={flavor.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-moroccan-cream/30 transition-colors">
                          <span>{flavor.name}</span>
                          <span className="text-moroccan-gold font-medium">+{flavor.price}€</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Box Type Selection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6">
                  3. Choisissez le type de coffret
                </h2>
                <RadioGroup value={boxType} onValueChange={setBoxType}>
                  <div className="space-y-4">
                    {boxTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <Label htmlFor={type.value} className="flex-1 cursor-pointer">
                          <div className="p-4 border rounded-lg hover:bg-moroccan-cream/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium">{type.label}</span>
                              <span className="text-moroccan-gold font-bold">
                                {type.extraPrice > 0 ? `+${type.extraPrice}€` : 'Inclus'}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{type.description}</p>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Personalization Options */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-moroccan-brown mb-6">
                  4. Personnalisation (optionnel)
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gift"
                      checked={isGift}
                      onCheckedChange={setIsGift}
                    />
                    <Label htmlFor="gift">C'est un cadeau</Label>
                  </div>

                  <div>
                    <Label htmlFor="customer-name">Nom du destinataire</Label>
                    <Input
                      id="customer-name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Entrez le nom du destinataire"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="custom-message">Message personnalisé</Label>
                    <Textarea
                      id="custom-message"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Ajoutez un message spécial (max 100 caractères)"
                      maxLength={100}
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {customMessage.length}/100 caractères
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Summary */}
          <div className="space-y-6">
            {/* Box Preview */}
            <Card className="sticky top-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-moroccan-brown mb-6">
                  Aperçu de votre coffret
                </h3>
                
                <div className="bg-gradient-to-br from-moroccan-cream to-moroccan-gold/20 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎁</div>
                    <p className="font-medium text-moroccan-brown">
                      {boxTypes.find(t => t.value === boxType)?.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {boxSize} dattes sélectionnées
                    </p>
                  </div>
                </div>

                {/* Selected Flavors */}
                {selectedFlavors.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-moroccan-brown mb-3">Saveurs sélectionnées:</h4>
                    <ul className="space-y-2 text-sm">
                      {selectedFlavors.map((flavorId) => {
                        const flavor = flavors.find(f => f.id === flavorId);
                        return (
                          <li key={flavorId} className="flex justify-between">
                            <span>{flavor?.name}</span>
                            <span className="text-moroccan-gold">+{flavor?.price}€</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm border-t pt-4">
                  <div className="flex justify-between">
                    <span>Coffret de base ({boxSize} dattes)</span>
                    <span>{boxSizes.find(s => s.value === boxSize)?.basePrice}€</span>
                  </div>
                  {boxTypes.find(t => t.value === boxType)?.extraPrice! > 0 && (
                    <div className="flex justify-between">
                      <span>Type de coffret</span>
                      <span>+{boxTypes.find(t => t.value === boxType)?.extraPrice}€</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Saveurs premium</span>
                    <span>+{selectedFlavors.reduce((total, flavorId) => {
                      const flavor = flavors.find(f => f.id === flavorId);
                      return total + (flavor?.price || 0);
                    }, 0).toFixed(1)}€</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-moroccan-gold border-t pt-2">
                    <span>Total</span>
                    <span>{calculateTotal().toFixed(2)}€</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-moroccan-gold hover:bg-moroccan-gold/90 text-moroccan-dark-brown font-semibold"
                  disabled={selectedFlavors.length !== parseInt(boxSize)}
                >
                  {selectedFlavors.length === parseInt(boxSize) 
                    ? 'Ajouter au panier' 
                    : `Sélectionnez ${parseInt(boxSize) - selectedFlavors.length} saveur(s) de plus`
                  }
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Livraison gratuite à partir de 50€
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Customization;
