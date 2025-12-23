import { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  FileText, 
  MessageSquare 
} from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Contato</span>
              </h2>
            </div>
            <p className="text-muted-foreground">
              Vamos conversar! Estou disponível para oportunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>

              <a
                href="mailto:fabiodepaulo2008@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium">fabiodepaulo2008@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/FabioFerreiraP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">github.com/FabioFerreiraP</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/fabio-ferreira-1312912a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/fabio-ferreira-1312912a6/</p>
                </div>
              </a>

              <Button variant="hero" size="lg" className="w-full mt-6" asChild>
                <a href="/Curriculo.pdf" download className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Baixar Currículo em PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
