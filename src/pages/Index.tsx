import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NovaLabs",
  alternateName: "NovaLabs Digital Solutions",
  url: "https://freelance.avikbhanja.tech",
  logo: "https://freelance.avikbhanja.tech/favicon.png",
  image: "https://freelance.avikbhanja.tech/og-image.png",
  description:
    "Professional freelance web developer offering custom website design, development, AI tools, and automation solutions for startups and small businesses worldwide.",
  founder: {
    "@type": "Person",
    name: "Avik Bhanja",
    url: "https://www.linkedin.com/in/avikbhanja/",
    jobTitle: "Freelance Full-Stack Web Developer",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "avikbhanja3@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://x.com/avik_bhanja",
    "https://www.linkedin.com/in/avikbhanja/",
    "https://www.instagram.com/avik_b_001/",
    "https://github.com/AVIKBHANJA",
  ],
  priceRange: "$$",
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "Website Design",
    "AI Tool Development",
    "Chatbot Development",
    "Business Automation",
    "Digital Marketing",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI Integration",
    "Web Design",
    "SEO",
    "Tailwind CSS",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to hire a freelance web developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our freelance web development projects typically range from $500 to $5,000+ depending on complexity. We offer competitive pricing as a student-led studio without sacrificing quality. Every project starts with a free consultation to understand your needs and provide a transparent quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites are delivered within 2-4 weeks. Simple landing pages can be ready in 1 week, while complex web applications with AI features may take 4-8 weeks. We provide a clear timeline during our free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern technologies including React, Next.js, TypeScript, Node.js, Tailwind CSS, and various AI/ML frameworks. We choose the best tech stack for each project to ensure fast, scalable, and maintainable solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after the website is launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide ongoing support and maintenance packages to keep your website running smoothly. This includes bug fixes, performance optimization, content updates, and feature additions as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build AI-powered features for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialize in integrating AI capabilities including custom chatbots, AI content generators, automated workflows, and intelligent recommendation systems. We use cutting-edge AI APIs and models to build practical tools that save you time and improve customer experience.",
      },
    },
  ],
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Freelance Web Developer & Digital Solutions | NovaLabs"
        description="Hire a skilled freelance web developer for custom websites, AI tools, chatbots & automation. Professional web development services for startups & small businesses. Fast delivery, competitive pricing. Book a free consultation today."
        keywords="freelance web developer, freelance website developer, hire freelance developer, web development services, custom website design, freelance developer for startups, AI chatbot development, website automation, React developer, Next.js developer, affordable web developer, professional website builder"
        canonical="https://freelance.avikbhanja.tech"
        jsonLd={[organizationSchema, faqSchema]}
      />
      <Hero />
      <ServicesOverview />
      <WhoWeHelp />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
