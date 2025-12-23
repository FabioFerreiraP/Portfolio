import { User, Sparkles, Code, BookOpen } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Sobre</span> Mim
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um <span className="text-foreground font-medium">Desenvolvedor Back-End</span> com 
                foco na linguagem <span className="text-primary font-medium">Java</span> e experiência prática 
                com projetos pessoais usando <span className="text-foreground">Spring Boot</span>, bancos de 
                dados relacionais e boas práticas como o padrão MVC.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tenho facilidade de aprendizado, gosto de resolver problemas usando lógica e sou apaixonado 
                por transformar ideias em <span className="text-foreground font-medium">aplicações reais</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed"> 
                Desde o primeiro “Hello world” até um aplicativo inteiro feito do zero.
                Por isso estou sempre aprendendo novas tecnologias e habilidades que me permitam ser um programador cada vez melhor.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="card-gradient p-4 rounded-lg border border-border hover-lift">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Código Limpo</h3>
                    <p className="text-sm text-muted-foreground">Legibilidade, organização e manutenção</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-4 rounded-lg border border-border hover-lift">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Arquitetura Back-End</h3>
                    <p className="text-sm text-muted-foreground">APIs REST, Spring Boot e MVC</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-4 rounded-lg border border-border hover-lift">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Evolução Constante</h3>
                    <p className="text-sm text-muted-foreground">Estudo diário e projetos práticos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
