import { 
  FolderGit2, 
  CheckSquare, 
  ExternalLink,
  Github,
  Dog
} from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'API para Certificação de alunos',
    subtitle: 'Spring Boot + PostgreSQL',
    icon: CheckSquare,
    description: 'API REST para cadastro e gerenciamento de alunos, com autenticação por e-mail e controle de acesso.',
    features: [
      'Cadastro de alunos com e-mail',
      'Controle de acesso à prova',
      'Validação de tentativa única por aluno',
      'Registro de realização da prova',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST'],
    color: 'primary',
  },
  {
    title: 'AdoPet',
    subtitle: 'Aplicativo mobile para adoção de animais',
    icon: Dog,
    description: 'App desenvolvido para conectar pessoas interessadas em adotar animais a ONGs e protetores independentes.',
    features: [
      'Cadastro e autenticação de usuários',
      'Visualização de detalhes dos animais',
      'Integração com banco em tempo real',
      'Interface simples e intuitiva',
    ],
    tags: ['Kotlin', 'XML', 'Firebase', 'Android'],
    color: 'terminal',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Projetos</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projetos pessoais desenvolvidos para aprendizado e prática das tecnologias estudadas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="card-gradient rounded-xl border border-border overflow-hidden hover-lift group"
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-secondary border border-border group-hover:border-primary/50 transition-colors`}>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="p-6 bg-secondary/30">
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Todos os projetos estão disponíveis no meu GitHub.
            </p>
            <Button variant="terminal" size="lg" asChild>
              <a href="https://github.com/FabioFerreiraP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Ver no GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
