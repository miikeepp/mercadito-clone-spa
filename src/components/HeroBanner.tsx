import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  return (
    <section className="relative w-full bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-[2.7/1] w-full overflow-hidden">
          <img
            src={heroBanner}
            alt="Meli+ Days - Cupones exclusivos solo por 24 horas"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 py-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === currentSlide ? "bg-accent" : "bg-muted-foreground/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
