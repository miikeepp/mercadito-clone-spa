import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  { name: "Audífonos Bluetooth Inalámbricos", price: 45900, discount: 25, freeShipping: true, image: "🎧" },
  { name: "Camiseta Deportiva Dry-Fit", price: 32000, discount: 30, freeShipping: true, image: "👕" },
  { name: "Reloj Inteligente Smartwatch", price: 89900, discount: 15, freeShipping: true, image: "⌚" },
  { name: "Mochila Impermeable 30L", price: 54900, discount: 20, freeShipping: false, image: "🎒" },
  { name: "Teclado Mecánico RGB", price: 125000, discount: 10, freeShipping: true, image: "⌨️" },
  { name: "Zapatillas Running Pro", price: 159900, discount: 35, freeShipping: true, image: "👟" },
  { name: "Parlante Portátil 20W", price: 67000, discount: 18, freeShipping: false, image: "🔊" },
  { name: "Mouse Ergonómico Wireless", price: 38900, discount: 22, freeShipping: true, image: "🖱️" },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(price);

const FeaturedProducts = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const container = document.getElementById("products-scroll");
    if (!container) return;
    const amount = dir === "left" ? -240 : 240;
    container.scrollBy({ left: amount, behavior: "smooth" });
    setScrollPos(container.scrollLeft + amount);
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground">Ofertas del día</h2>
          <a href="#" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
            Ver todas →
          </a>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-card shadow-meli-md grid place-items-center text-accent hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            id="products-scroll"
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x-mandatory pb-4"
          >
            {products.map((product, i) => (
              <motion.a
                key={i}
                href="#"
                className="flex-shrink-0 w-56 bg-card rounded-xl overflow-hidden snap-start shadow-meli-sm will-change-transform"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              >
                <div className="aspect-square bg-secondary flex items-center justify-center text-6xl outline outline-1 outline-foreground/5 -outline-offset-1">
                  {product.image}
                </div>
                <div className="p-4 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium text-foreground tabular-nums">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm font-semibold text-meli-green">{product.discount}% OFF</span>
                  </div>
                  {product.freeShipping && (
                    <span className="text-sm font-semibold text-meli-green mt-1">Envío gratis</span>
                  )}
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{product.name}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-card shadow-meli-md grid place-items-center text-accent hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
