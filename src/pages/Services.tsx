import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Globe, Bot, Workflow, Share2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesSchema = [
  {
    "@type": "WebPage",
    "@id": "https://freelance.avikbhanja.tech/services#webpage",
    url: "https://freelance.avikbhanja.tech/services",
    name: "Freelance Web Development Services",
    isPartOf: { "@id": "https://freelance.avikbhanja.tech/#website" },
    description: "Professional freelance web development, AI tools, chatbot development, and digital marketing services.",
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://freelance.avikbhanja.tech" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://freelance.avikbhanja.tech/services" },
    ],
  },
  {
    "@type": "ItemList",
    name: "Freelance Web Development Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Custom Website Design & Development",
          url: "https://freelance.avikbhanja.tech/services",
          description: "Professional freelance website design and development services. We build responsive, SEO-optimized, high-performance websites for startups and small businesses.",
          provider: { "@id": "https://freelance.avikbhanja.tech/#organization" },
          areaServed: "Worldwide",
          serviceType: "Web Development",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "AI Tools & Generator Development",
          url: "https://freelance.avikbhanja.tech/services",
          description: "Custom AI-powered tool development including content generators, data analysis tools, and intelligent automation systems.",
          provider: { "@id": "https://freelance.avikbhanja.tech/#organization" },
          areaServed: "Worldwide",
          serviceType: "AI Development",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Chatbot & Website Automation",
          url: "https://freelance.avikbhanja.tech/services",
          description: "Custom chatbot development and business process automation to reduce manual work and provide 24/7 customer engagement.",
          provider: { "@id": "https://freelance.avikbhanja.tech/#organization" },
          areaServed: "Worldwide",
          serviceType: "Automation",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Social Media & Digital Presence",
          url: "https://freelance.avikbhanja.tech/services",
          description: "Complete social media strategy, content planning, and digital branding services to grow your online visibility.",
          provider: { "@id": "https://freelance.avikbhanja.tech/#organization" },
          areaServed: "Worldwide",
          serviceType: "Digital Marketing",
        },
      },
    ],
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Website Design & Development",
    description: "We design and develop stunning, high-performance websites that not only look great but drive real business results. As experienced freelance web developers, we build custom solutions tailored to your brand and business goals.",
    whoFor: "Startups, small businesses, and creators who need a professional online presence that converts visitors into customers",
    includes: [
      "Custom responsive design tailored to your brand",
      "Mobile-first development for all devices",
      "SEO-optimized structure and content",
      "Lightning-fast page load speeds",
      "Content management system (CMS) integration",
      "Google Analytics & conversion tracking",
    ],
    benefits: [
      "Establish instant credibility with potential clients",
      "Convert more website visitors into paying customers",
      "Stand out from competitors with a unique design",
    ],
  },
  {
    icon: Bot,
    title: "AI Tools & Generator Development",
    description: "Leverage the power of artificial intelligence with custom AI tools that automate repetitive tasks and supercharge your productivity. From content generators to data analysis tools, we build AI solutions that deliver measurable ROI.",
    whoFor: "Businesses looking to streamline operations, reduce costs, and offer innovative AI-powered solutions to their customers",
    includes: [
      "Custom AI tool design & development",
      "Seamless integration with existing systems",
      "Intuitive user-friendly interfaces",
      "Comprehensive training & documentation",
      "Ongoing maintenance & model updates",
    ],
    benefits: [
      "Save hours of manual work every week",
      "Reduce operational costs by up to 70%",
      "Offer cutting-edge AI features to your users",
    ],
  },
  {
    icon: Workflow,
    title: "Chatbot & Website Automation",
    description: "Smart chatbot development and automation systems that work around the clock to engage your customers, answer queries, and streamline your business operations. Never miss a lead again with 24/7 automated customer engagement.",
    whoFor: "Businesses that want to scale customer support, capture more leads, and automate repetitive tasks without hiring more staff",
    includes: [
      "Custom AI chatbot development",
      "Multi-platform integration (website, WhatsApp, Slack)",
      "Natural language processing for human-like conversations",
      "Analytics dashboard & conversation insights",
      "Continuous optimization & training",
    ],
    benefits: [
      "24/7 customer engagement without extra staff",
      "90% faster response times for customer queries",
      "Reduced support costs by up to 60%",
    ],
  },
  {
    icon: Share2,
    title: "Social Media & Digital Presence",
    description: "Comprehensive digital marketing and social media management to grow your brand visibility and engagement across all platforms. We help you build a consistent, professional online presence that attracts your target audience.",
    whoFor: "Brands and creators who want to grow their online following, increase engagement, and convert social media into revenue",
    includes: [
      "Social media strategy & content planning",
      "Content calendar creation & scheduling",
      "Profile optimization across platforms",
      "Engagement tactics & community building",
      "Monthly performance reporting & insights",
    ],
    benefits: [
      "Increased brand awareness and reach",
      "Higher engagement rates and follower growth",
      "Consistent professional brand presence",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Freelance Web Development Services - Website Design, AI Tools & Chatbots"
        description="Professional freelance web development services including custom website design, AI tool development, chatbot integration & digital marketing. Affordable pricing for startups & small businesses. Get a free quote today."
        keywords="freelance web development services, custom website design, AI chatbot development, website automation, hire freelance developer, web developer for hire, affordable web development, React developer services, Next.js development"
        canonical="https://freelance.avikbhanja.tech/services"
        jsonLd={servicesSchema}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(186_100%_50%/0.1),transparent_50%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              Freelance Web Development <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-100">
              End-to-end digital solutions from an experienced freelance web developer. From custom website design to AI-powered tools, we deliver professional results at competitive prices.
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
                      Get a Free Quote
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
              Book a free 30-minute consultation with our freelance web development team. We'll help you figure out the best solution for your business goals and budget.
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
