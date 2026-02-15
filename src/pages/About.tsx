import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Zap, Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Person",
    name: "Avik Bhanja",
    jobTitle: "Freelance Full-Stack Web Developer",
    description: "Experienced freelance web developer and founder of NovaLabs, specializing in React, Next.js, TypeScript, and AI-powered web applications for startups and small businesses.",
    url: "https://freelance.avikbhanja.tech/about",
    sameAs: [
      "https://www.linkedin.com/in/avikbhanja/",
      "https://x.com/avik_bhanja",
      "https://github.com/AVIKBHANJA",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "AI Integration", "Web Design", "Tailwind CSS"],
    worksFor: {
      "@type": "Organization",
      name: "NovaLabs",
      url: "https://freelance.avikbhanja.tech",
    },
  },
};

const team = [
  {
    name: "Avik Bhanja",
    role: "Founder & Full-Stack Developer",
    bio: "Freelance full-stack web developer with 2+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, and AI-powered solutions for startups and growing businesses.",
    icon: "AB",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven Development",
    description: "Every line of code we write serves a purpose. We build websites and tools that drive measurable business outcomes, not just look pretty.",
  },
  {
    icon: Lightbulb,
    title: "Modern Technology Stack",
    description: "We leverage cutting-edge technologies like React, Next.js, and AI frameworks to give you a competitive edge in the digital landscape.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "You work directly with us - no middlemen, no outsourcing. Clear communication, transparent pricing, and genuine care for your project's success.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description: "We deliver quality projects on time, every time. Our agile workflow means you see progress fast and can launch sooner.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About NovaLabs - Freelance Web Developer Avik Bhanja"
        description="Meet Avik Bhanja, freelance full-stack web developer and founder of NovaLabs. 2+ years of experience building modern websites, AI tools, and digital solutions for 50+ startups and small businesses worldwide."
        keywords="freelance web developer, Avik Bhanja, NovaLabs about, full stack developer, React developer, Next.js developer, hire freelance developer India, freelance developer portfolio"
        canonical="https://freelance.avikbhanja.tech/about"
        jsonLd={aboutSchema}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              About <span className="text-gradient">NovaLabs</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-100">
              We're a freelance web development studio helping startups and small businesses build professional digital solutions that drive real growth.
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
                Professional Web Development, <span className="text-gradient">Freelancer Pricing</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NovaLabs was founded with a clear mission: deliver agency-quality web development at prices that startups and small businesses can actually afford.
                </p>
                <p>
                  As a freelance web developer immersed in the latest technologies and design trends, I saw how many growing businesses struggled to find quality digital solutions without breaking the bank. Traditional agencies charge premium rates with layers of overhead. I cut through that.
                </p>
                <p>
                  Today, we've helped <strong className="text-foreground">50+ businesses</strong> establish and grow their digital presence - from sleek marketing websites to AI-powered tools and automated customer engagement systems. Every project gets my direct attention and expertise.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">50+ Projects Delivered</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Modern tech stack meets proven execution for real business results
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
              To empower ambitious entrepreneurs, startups, and creators with <span className="text-foreground font-medium">world-class web development and digital solutions</span> that were once only accessible to companies with big-agency budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Developer</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The freelance web developer behind NovaLabs
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.icon}</span>
                </div>
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
              Why Clients <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What sets our freelance web development apart
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
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Work With a Freelance Developer Who Cares?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project. Book a free consultation and see how we can bring your vision to life.
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
