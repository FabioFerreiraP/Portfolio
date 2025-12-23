import { Rocket, ArrowDown, Code2 } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Disponível para oportunidades
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="flex items-center justify-center gap-3 mb-2">
              <Rocket className="w-10 h-10 md:w-14 md:h-14 text-primary animate-float" />
            </span>
            <span className="text-foreground">Desenvolvedor </span>
            <span className="text-gradient">Back-End</span>
          </h1>

          {/* Code snippet decoration */}
          <div className="hidden md:flex justify-center mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="bg-code-bg border border-border rounded-lg p-4 font-mono text-sm text-left max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="w-3 h-3 rounded-full bg-terminal-green/60" />
              </div>
              <code>
                <span className="text-muted-foreground">{'// '}</span>
                <span className="text-primary">Developer</span>
                <span className="text-muted-foreground">{'.java'}</span>
                <br />
                <span className="text-terminal-green">public class</span>{' '}
                <span className="text-primary">Fabio</span>{' '}
                <span className="text-foreground">{'{'}</span>
                <br />
                <span className="text-muted-foreground pl-4">{'// Ready to code'}</span>
                <span className="terminal-cursor text-primary">|</span>
                <br />
                <span className="text-foreground">{'}'}</span>
              </code>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos" className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Ver Projetos
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contato">Entrar em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
