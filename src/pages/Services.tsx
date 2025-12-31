import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Globe, Bot, Workflow, Share2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "We create stunning, high-performance websites that not only look great but drive real business results.",
    whoFor: "Startups, small businesses, and creators who need a professional online presence",
    includes: [
      "Custom design tailored to your brand",
      "Responsive development for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Content management system",
      "Analytics integration",
    ],
    benefits: [
      "Establish credibility instantly",
      "Convert more visitors to customers",
      "Stand out from competitors",
    ],
  },
  {
    icon: Bot,
    title: "AI Tools & Generators",
    description: "Leverage the power of AI with custom tools that automate repetitive tasks and enhance your productivity.",
    whoFor: "Businesses looking to streamline operations and offer innovative solutions to their customers",
    includes: [
      "Custom AI tool development",
      "Integration with existing systems",
      "User-friendly interfaces",
      "Training & documentation",
      "Ongoing maintenance",
    ],
    benefits: [
      "Save hours of manual work",
      "Reduce operational costs",
      "Offer cutting-edge features",
    ],
  },
  {
    icon: Workflow,
    title: "Website Automation & Chatbots",
    description: "Smart automation systems and chatbots that work around the clock to engage your customers and streamline operations.",
    whoFor: "Businesses that want to scale customer support and automate repetitive tasks",
    includes: [
      "Custom chatbot development",
      "Multi-platform integration",
      "Natural language processing",
      "Analytics & insights",
      "Continuous optimization",
    ],
    benefits: [
      "24/7 customer engagement",
      "Faster response times",
      "Reduced support costs",
    ],
  },
  {
    icon: Share2,
    title: "Social Media & Digital Support",
    description: "Comprehensive digital presence support to grow your brand visibility and engagement across all platforms.",
    whoFor: "Brands and creators who want to grow their online audience and engagement",
    includes: [
      "Social media strategy",
      "Content calendar planning",
      "Profile optimization",
      "Engagement tactics",
      "Performance reporting",
    ],
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Consistent brand presence",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-100">
              End-to-end digital solutions designed to help your business grow. From stunning websites to AI-powered tools, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Who it's for:</span> {service.whoFor}
                    </p>
                  </div>
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-semibold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-4 text-primary">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free consultation and we'll help you figure out the best solution for your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
