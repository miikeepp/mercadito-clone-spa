import { Truck, User, MapPin, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Truck,
    title: "Envío gratis",
    description: "Beneficio por ser tu primera compra.",
    cta: "Mostrar productos",
  },
  {
    icon: User,
    title: "Ingresa a tu cuenta",
    description: "Disfruta de ofertas y compra sin límites.",
    cta: "Ingresar a tu cuenta",
  },
  {
    icon: MapPin,
    title: "Ingresa tu ubicación",
    description: "Consulta costos y tiempos de entrega.",
    cta: "Ingresar ubicación",
  },
  {
    icon: CreditCard,
    title: "Medios de pago",
    description: "Paga tus compras de forma rápida y segura.",
    cta: "Conocer medios de pago",
  },
  {
    icon: DollarSign,
    title: "Menos de $40.000",
    description: "Descubre productos con precios bajos.",
    cta: "Mostrar productos",
  },
  {
    icon: TrendingUp,
    title: "Más vendidos",
    description: "Explora los productos que son tendencia.",
    cta: "Ir a Más vendidos",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-6 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {services.map((service) => (
            <motion.a
              key={service.title}
              href="#"
              className="flex-shrink-0 w-52 bg-card rounded-xl p-5 flex flex-col items-center text-center shadow-meli-sm"
              whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{service.title}</h3>
              <div className="w-16 h-16 mb-3 flex items-center justify-center text-primary">
                <service.icon className="w-10 h-10 stroke-[1.5]" />
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <span className="text-xs font-semibold text-accent mt-auto border border-accent rounded-full px-4 py-1.5 hover:bg-accent/5 transition-colors duration-200">
                {service.cta}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
