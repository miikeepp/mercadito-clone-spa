const columns = [
  {
    title: "Acerca de",
    links: ["Mercado Libre", "Investor relations", "Tendencias", "Sustentabilidad"],
  },
  {
    title: "Otros sitios",
    links: ["Developers", "Mercado Pago", "Mercado Shops", "Mercado Ads"],
  },
  {
    title: "Ayuda",
    links: ["Comprar", "Vender", "Resolución de problemas", "Centro de seguridad"],
  },
  {
    title: "Redes sociales",
    links: ["Twitter", "Facebook", "Instagram", "YouTube"],
  },
  {
    title: "Mi cuenta",
    links: ["Ingresa", "Vender", "Mis compras", "Favoritos"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-secondary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>Copyright © 1999-2026 MercadoLibre Colombia LTDA.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-colors duration-200">Términos y condiciones</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Cómo cuidamos tu privacidad</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
