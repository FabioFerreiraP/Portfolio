import { 
  Zap, 
  Server, 
  GitBranch, 
  Database, 
  Layers, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'APIs REST com Java',
    description: 'Desenvolvimento de APIs robustas usando Java e Spring Boot.',
  },
  {
    icon: Layers,
    title: 'Padrão MVC',
    description: 'Organização do código seguindo arquitetura em camadas.',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Criação e integração com bancos de dados relacionais.',
  },
  {
    icon: GitBranch,
    title: 'Versionamento Git',
    description: 'Controle de versão e colaboração com Git e GitHub.',
  },
  {
    icon: Layers,
    title: 'Estruturação',
    description: 'Projetos estruturados em camadas: Controller, Service, Repository.',
  },
  {
    icon: Rocket,
    title: 'Aprendizado Rápido',
    description: 'Facilidade em aprender novas ferramentas e conceitos.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                O Que Eu <span className="text-gradient">Faço</span>
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-secondary border border-border w-fit mb-4 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
