import { MapPin, ShoppingCart, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
import meliLogo from "@/assets/meli-logo.png";

const navLinks = [
  { label: "Categorías", hasDropdown: true },
  { label: "Ofertas" },
  { label: "Cupones" },
  { label: "Supermercado", badge: "NUEVO" },
  { label: "Moda" },
  { label: "Vender" },
  { label: "Ayuda / PQR" },
];

const Navbar = () => {
  return (
    <header>
      {/* L1: Yellow bar */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src={meliLogo} alt="Mercado Libre" className="h-9 w-auto" />
            </a>

            {/* Search */}
            <SearchBar />

            {/* Promo banner */}
            <div className="hidden lg:flex items-center gap-2 rounded-full bg-meli-green px-4 py-1.5">
              <span className="text-accent-foreground text-sm font-bold">ENVÍO GRATIS</span>
              <span className="text-accent-foreground text-sm">EN TU <strong>PRIMERA COMPRA</strong></span>
            </div>
          </div>

          {/* L2: Location + nav + account */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-6">
              {/* Location */}
              <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span>Ingresa tu ubicación</span>
              </button>

              {/* Nav links */}
              <nav className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className="relative flex items-center gap-0.5 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    {link.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-meli-green">
                        {link.badge}
                      </span>
                    )}
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                ))}
              </nav>
            </div>

            {/* Account links */}
            <div className="hidden md:flex items-center gap-4 text-sm">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Crea tu cuenta
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Ingresa
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Mis compras
              </a>
              <button className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
