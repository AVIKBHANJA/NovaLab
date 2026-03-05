import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="NovaLabs terms of service. Read the terms and conditions that govern your use of our freelance web development services."
        canonical="https://freelance.avikbhanja.tech/terms-of-service"
        jsonLd={[
          {
            "@type": "WebPage",
            "@id": "https://freelance.avikbhanja.tech/terms-of-service#webpage",
            url: "https://freelance.avikbhanja.tech/terms-of-service",
            name: "Terms of Service - NovaLabs",
            isPartOf: { "@id": "https://freelance.avikbhanja.tech/#website" },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://freelance.avikbhanja.tech" },
              { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://freelance.avikbhanja.tech/terms-of-service" },
            ],
          },
        ]}
      />

      <section className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last updated: March 4, 2026</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Services</h2>
              <p>NovaLabs provides freelance web development, design, AI tool development, and automation services. The specific deliverables, timelines, and pricing for each project are agreed upon during the consultation and documented in a project proposal.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. Project Proposals & Agreements</h2>
              <p>All projects begin with a free consultation. A detailed proposal outlining scope, deliverables, timeline, and cost will be provided before work begins. Work commences only after mutual agreement on the proposal terms.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Payment Terms</h2>
              <p>Payment terms are specified in each project proposal. Typically, a deposit is required before work begins, with the remaining balance due upon project completion. Late payments may result in project delays.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Revisions</h2>
              <p>Each project includes a reasonable number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope may incur extra charges.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Intellectual Property</h2>
              <p>Upon full payment, all custom code and design assets created for your project are transferred to you. We retain the right to showcase the work in our portfolio unless otherwise agreed.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
              <p>NovaLabs is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid for the specific project.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Termination</h2>
              <p>Either party may terminate a project with written notice. In case of termination, payment is due for all work completed up to the termination date.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">8. Contact</h2>
              <p>For questions about these terms, contact us at avikbhanja3@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
