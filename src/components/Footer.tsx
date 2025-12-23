import { Terminal, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              <span className="text-primary">fabio</span>
              <span className="text-muted-foreground">.dev</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Desenvolvedor Back-End | Código limpo, sistemas organizados.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Fabio Ferreira</p>
        </div>
      </div>
    </footer>
  );
};
