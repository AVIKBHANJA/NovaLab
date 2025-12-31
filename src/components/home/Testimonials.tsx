import { MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(280_100%_70%/0.05),transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-primary mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real businesses we've helped grow
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-premium p-12 rounded-2xl text-center animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquarePlus className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Be the First to Share Your Experience
            </h3>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We'd love to hear about your experience working with us. Your
              feedback helps us improve and helps others make informed
              decisions.
            </p>

            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/testimonials")}
              className="group"
            >
              Share Your Testimonial
              <MessageSquarePlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
