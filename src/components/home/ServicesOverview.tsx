import { Link } from "react-router-dom";
import { Globe, Bot, Workflow, Share2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Beautiful, high-converting websites that make your brand stand out and drive real results.",
  },
  {
    icon: Bot,
    title: "AI Tools & Generators",
    description: "Custom AI-powered tools that automate repetitive tasks and enhance your workflow.",
  },
  {
    icon: Workflow,
    title: "Automation & Chatbots",
    description: "Smart chatbots and automation systems that work 24/7 to engage your customers.",
  },
  {
    icon: Share2,
    title: "Digital Presence Support",
    description: "Complete social media and digital strategy to grow your online visibility.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 relative noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(280_100%_70%/0.05),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-primary mb-4">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end digital solutions tailored for modern businesses
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group card-premium rounded-2xl p-8 card-3d animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-glow">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Bottom glow line */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;