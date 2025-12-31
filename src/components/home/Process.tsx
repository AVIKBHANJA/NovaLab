import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We dive deep into your goals, audience, and vision to understand exactly what you need.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Our team crafts beautiful mockups and prototypes that align with your brand identity.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "We develop your solution using modern technologies for speed and scalability.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Your project goes live with ongoing support to ensure everything runs smoothly.",
  },
];

const Process = () => {
  return (
    <section className="py-24 relative noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(280_100%_70%/0.05),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-primary mb-4">
            WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined approach that takes you from idea to launch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="relative card-premium rounded-2xl p-6 group card-3d animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              {/* Step number - positioned absolute */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors font-mono">
                {item.step}
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;