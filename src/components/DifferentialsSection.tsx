import { 
  Star, 
  Brain, 
  Sparkles, 
  Search, 
  Briefcase, 
  Users 
} from 'lucide-react';

const differentials = [
  {
    icon: Brain,
    title: 'Foco em Lógica',
    description: 'Clareza e eficiência no código',
  },
  {
    icon: Sparkles,
    title: 'Arquitetura Limpa',
    description: 'Interesse em boas práticas',
  },
  {
    icon: Search,
    title: 'Curioso e Proativo',
    description: 'Sempre buscando aprender mais',
  },
  {
    icon: Briefcase,
    title: 'Projetos Reais',
    description: 'Experiência com aplicações práticas',
  },
  {
    icon: Users,
    title: 'Comunicação',
    description: 'Facilidade em trabalho em equipe',
  },
];

export const DifferentialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Diferenciais</span>
              </h2>
            </div>
          </div>

          {/* Differentials */}
          <div className="flex flex-wrap justify-center gap-4">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all group"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground text-sm ml-2 hidden sm:inline">
                      — {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
