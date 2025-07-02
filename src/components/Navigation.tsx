
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, ShoppingCart, Search } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [cartCount] = useState(3); // Mock cart count

  const navigationItems = [
    { name: "Accueil", path: "/" },
    { name: "Notre Histoire", path: "/about" },
    { 
      name: "Produits", 
      path: "/products",
      dropdown: [
        { name: "Dattes Fourrées", path: "/products#stuffed-dates" },
        { name: "Sucre de Dattes", path: "/products#date-sugar" },
        { name: "Coffrets Cadeaux", path: "/products#gift-boxes" }
      ]
    },
    { name: "Personnaliser", path: "/customization" },
    { name: "Boutique", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || 
           (path === "/" && location.pathname === "/") ||
           (path !== "/" && location.pathname.startsWith(path));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-serif font-bold text-moroccan-brown">
            TAZE<span className="text-moroccan-gold">DATES</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-moroccan-gold ${
                  isActivePath(item.path) 
                    ? "text-moroccan-gold" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-moroccan-cream hover:text-moroccan-brown transition-colors"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/shop">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-moroccan-gold text-white">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mt-8 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-lg font-medium transition-colors ${
                        isActivePath(item.path)
                          ? "text-moroccan-gold"
                          : "text-foreground hover:text-moroccan-gold"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-sm text-muted-foreground hover:text-moroccan-gold transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
