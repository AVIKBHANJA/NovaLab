import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";

const ParticleField = lazy(() => import("@/components/three/ParticleField"));

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden noise-overlay">
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      
      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(280_100%_70%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(200_100%_60%/0.1),transparent_50%)]" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] float-subtle" />
      <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-accent/10 rounded-full blur-[120px] float-delayed" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient glass-effect mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Student-led Digital Studio</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up animation-delay-100">
            We Build Digital
            <br />
            <span className="text-gradient">Experiences That</span>
            <br />
            <span className="relative inline-block">
              <span className="text-gradient">Convert</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up animation-delay-200">
            Helping startups, small businesses, and creators establish a 
            <span className="text-foreground font-medium"> powerful online presence </span>
            with modern websites, AI tools, and automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                View Services
              </Button>
            </Link>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-up animation-delay-400">
            {[
              { icon: Code2, label: "Next.js" },
              { icon: Zap, label: "AI Powered" },
              { icon: Code2, label: "React" },
              { icon: Zap, label: "Automation" },
            ].map((tech, i) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-xs font-mono text-muted-foreground"
              >
                <tech.icon className="w-3 h-3 text-primary" />
                {tech.label}
              </div>
            ))}
          </div>

          {/* Trust Indicators - Bento style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up animation-delay-500">
            {[
              { value: "50+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "24h", label: "Response" },
              { value: "3x", label: "ROI Average" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-premium rounded-xl p-4 card-3d"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;