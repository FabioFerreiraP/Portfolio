import { 
  Code2, 
  Server, 
  Database, 
  Wifi, 
  Layers, 
  Wrench,
  Coffee
} from 'lucide-react';

const stackCategories = [
  {
    title: 'Linguagens',
    icon: Code2,
    items: [
      { name: 'Java', highlight: false, note: 'Spring Boot' },
      { name: 'Kotlin', highlight: false },
      { name: 'Python', highlight: false },
      { name: 'PHP', highlight: false },
      { name: 'HTML', highlight: false },
      { name: 'CSS', highlight: false },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    items: [
      { name: 'PostgreSQL', highlight: false },
      { name: 'MySQL', highlight: false },
      { name: 'Firebase', highlight: false },
      { name: 'SQLite', highlight: false },
    ],
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    items: [
      { name: 'Git', highlight: false },
      { name: 'GitHub', highlight: false },
      { name: 'Insomnia', highlight: false },
      { name: 'IntelliJ IDEA', highlight: false },
      { name: 'VS Code', highlight: false },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Stack</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo na construção das aplicações.
            </p>
          </div>

          {/* Stack Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stackCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="card-gradient p-6 rounded-xl border border-border hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary border border-border">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className={`tech-badge ${
                          item.highlight ? 'border-primary/50 text-primary' : ''
                        }`}
                      >
                        {item.name}
                        {item.note && (
                          <span className="text-xs text-muted-foreground ml-1">
                            ({item.note})
                          </span>
                        )}
                      </div>
                    ))}
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
