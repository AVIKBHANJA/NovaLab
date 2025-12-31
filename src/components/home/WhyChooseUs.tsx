import { Zap, Clock, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies to build fast, scalable, and future-proof solutions.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Get your project delivered on time without compromising on quality or attention to detail.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project goes through rigorous testing to ensure a polished, bug-free experience.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Approach",
    description: "Work directly with our team—no middlemen, just clear communication and real results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-primary mb-4">
              WHY US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Work <span className="text-gradient">With Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just another agency. As a student-led studio, we bring fresh perspectives, 
              genuine passion, and competitive pricing—without sacrificing professionalism.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 p-4 rounded-xl card-premium group hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Main stats card */}
            <div className="card-premium aspect-square rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(280_100%_70%/0.1),transparent_60%)]" />
              
              <div className="text-center relative z-10">
                <div className="text-7xl sm:text-8xl font-bold text-gradient mb-4 animate-glow-pulse">50+</div>
                <p className="text-muted-foreground text-lg font-mono">Projects Delivered</p>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-8 border border-primary/10 rounded-full" />
              <div className="absolute inset-16 border border-accent/10 rounded-full" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 card-premium w-28 h-28 rounded-2xl flex items-center justify-center float-subtle">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-xs text-muted-foreground font-mono">Satisfaction</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 card-premium w-32 h-32 rounded-2xl flex items-center justify-center float-delayed">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <p className="text-xs text-muted-foreground font-mono">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;