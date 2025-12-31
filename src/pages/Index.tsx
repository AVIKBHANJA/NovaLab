import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <WhoWeHelp />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
