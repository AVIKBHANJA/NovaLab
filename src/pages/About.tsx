import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Zap, Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Avik Bhanja",
    role: "Founder & Creative Director",
    bio: "Full-stack designer with 2+ years in startups. Full-stack engineer specializing in Next.js and modern web architecture.",
    icon: "👨‍💼",
  },
  // {
  //   name: "Jeet Kangsabanik",
  //   role: "Co-Founder & Lead Developer",
  //   bio: "Full Stack Web Developer with experience in React Native and mobile app development.",
  //   icon: "👨‍💻",
  // },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We don't just build pretty things—we build solutions that drive measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, leveraging the latest technologies to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Every solution we create is designed with real users in mind, ensuring intuitive experiences.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "We work fast without cutting corners, delivering quality projects on time, every time.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              About <span className="text-gradient">NovaLabs</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-100">
              We're a student-led digital solutions studio with a mission to make professional digital services accessible to growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Built by Students, <span className="text-gradient">Driven by Passion</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NovaLabs was born from a simple observation: many startups and small businesses struggle to afford quality digital solutions from traditional agencies.
                </p>
                <p>
                  As students immersed in the latest technologies and design trends, we saw an opportunity to bridge this gap. We bring fresh perspectives, genuine enthusiasm, and competitive pricing—without sacrificing the professionalism you deserve.
                </p>
                <p>
                  Today, we've helped over 50 businesses establish and grow their digital presence. From sleek websites to AI-powered tools, we're committed to delivering solutions that make a real impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Fresh Ideas</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Modern mindset meets proven execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower ambitious entrepreneurs and creators with <span className="text-foreground font-medium">world-class digital solutions</span> that were once only accessible to big-budget companies.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The people behind NovaLabs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to bring your vision to life? We'd love to hear about your project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
