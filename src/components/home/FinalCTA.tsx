import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">Let's Talk</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up animation-delay-100">
            Ready to Build Something
            <br />
            <span className="text-gradient">Amazing Together?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto animate-fade-up animation-delay-200">
            Let's discuss your project and explore how we can help you achieve your digital goals. No pressure, just a friendly conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="hero-outline" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>
          
          {/* Decorative grid */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up animation-delay-400">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="h-1 rounded-full bg-gradient-to-r from-primary/50 to-accent/50"
                style={{ opacity: 0.3 + i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;