import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart",
    content: "NovaLabs transformed our online presence completely. Their attention to detail and modern design approach helped us increase conversions by 40%.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO, GrowthCo",
    content: "Working with NovaLabs was a game-changer. They delivered a stunning website in record time, and their AI chatbot integration saved us countless hours.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Coach & Creator",
    content: "As a solo creator, I needed a professional website that reflected my brand. NovaLabs exceeded my expectations—and at a fraction of the cost of big agencies.",
    rating: 5,
  },
];

const Testimonials = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-premium p-8 rounded-2xl relative card-3d group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-background font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm font-mono">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;