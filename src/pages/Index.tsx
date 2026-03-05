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

const homePageSchema = [
  {
    "@type": "WebPage",
    "@id": "https://freelance.avikbhanja.tech/#webpage",
    url: "https://freelance.avikbhanja.tech",
    name: "Freelance Web Developer & Digital Solutions | NovaLabs",
    isPartOf: { "@id": "https://freelance.avikbhanja.tech/#website" },
    about: { "@id": "https://freelance.avikbhanja.tech/#organization" },
    description:
      "Hire a skilled freelance web developer for custom websites, AI tools, chatbots & automation. Professional web development services for startups & small businesses.",
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://freelance.avikbhanja.tech",
      },
    ],
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Freelance Web Developer & Digital Solutions | NovaLabs"
        description="Hire a skilled freelance web developer for custom websites, AI tools, chatbots & automation. Professional web development services for startups & small businesses. Fast delivery, competitive pricing. Book a free consultation today."
        keywords="freelance web developer, freelance website developer, hire freelance developer, web development services, custom website design, freelance developer for startups, AI chatbot development, website automation, React developer, Next.js developer, affordable web developer, professional website builder"
        canonical="https://freelance.avikbhanja.tech"
        jsonLd={homePageSchema}
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
