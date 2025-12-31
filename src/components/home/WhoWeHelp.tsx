import { Rocket, Store, Mic, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description: "Launch your MVP with a stunning website that attracts investors and early adopters.",
  },
  {
    icon: Store,
    title: "Small Business Owners",
    description: "Modernize your online presence and automate customer interactions to grow faster.",
  },
  {
    icon: Mic,
    title: "Creators & Coaches",
    description: "Build your personal brand with a professional platform that converts followers to clients.",
  },
  {
    icon: Lightbulb,
    title: "Early-Stage Brands",
    description: "Establish credibility from day one with a polished digital identity.",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-24 relative noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(200_100%_60%/0.08),transparent_60%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-accent mb-4">
            CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Who We <span className="text-gradient">Help</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with ambitious individuals and teams ready to level up their digital game
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="card-premium rounded-2xl p-6 card-3d group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:shadow-glow-accent">
                <audience.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;