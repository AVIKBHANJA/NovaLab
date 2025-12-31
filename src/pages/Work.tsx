import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "TechStart Platform Redesign",
    category: "Website Development",
    problem: "TechStart's outdated website was struggling to convert visitors into paying customers.",
    solution: "Complete redesign with modern UI, improved user flow, and conversion-optimized landing pages.",
    result: "40% increase in conversions, 60% lower bounce rate",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "GrowthCo AI Chatbot",
    category: "AI & Automation",
    problem: "GrowthCo's support team was overwhelmed with repetitive customer queries.",
    solution: "Custom AI chatbot integrated with their knowledge base and CRM system.",
    result: "70% reduction in support tickets, 24/7 customer engagement",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "CoachEmily Personal Brand",
    category: "Website Design",
    problem: "Emily needed a professional platform to establish credibility and attract coaching clients.",
    solution: "Stunning personal brand website with booking integration and content hub.",
    result: "3x increase in consultation bookings",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "ScaleUp Content Generator",
    category: "AI Tools",
    problem: "ScaleUp's marketing team spent hours creating social media content manually.",
    solution: "Custom AI-powered content generator tailored to their brand voice and style.",
    result: "80% time saved on content creation",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "LocalBites Delivery Platform",
    category: "Website Development",
    problem: "LocalBites needed an online ordering system to compete with larger delivery apps.",
    solution: "Custom ordering platform with real-time tracking and restaurant dashboard.",
    result: "150% increase in online orders",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "FitPro Automation Suite",
    category: "Automation",
    problem: "FitPro gym was manually managing member communications and scheduling.",
    solution: "Automated email sequences, booking system, and member engagement workflows.",
    result: "25 hours saved weekly on admin tasks",
    color: "from-blue-500/20 to-indigo-500/20",
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-100">
              A showcase of projects that drove real results for our clients. From websites to AI tools, see what we've built.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col"
              >
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${study.color} mb-6 flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                
                <span className="text-xs font-medium text-primary mb-2">{study.category}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                
                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Problem</p>
                    <p className="text-sm text-foreground/80">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Solution</p>
                    <p className="text-sm text-foreground/80">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Result</p>
                  <p className="text-sm font-semibold text-primary">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Want Similar Results?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help transform your business with a tailored digital solution.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
