import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="NovaLabs privacy policy. Learn how we collect, use, and protect your personal information when you use our freelance web development services."
        canonical="https://freelance.avikbhanja.tech/privacy-policy"
        jsonLd={[
          {
            "@type": "WebPage",
            "@id": "https://freelance.avikbhanja.tech/privacy-policy#webpage",
            url: "https://freelance.avikbhanja.tech/privacy-policy",
            name: "Privacy Policy - NovaLabs",
            isPartOf: { "@id": "https://freelance.avikbhanja.tech/#website" },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://freelance.avikbhanja.tech" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://freelance.avikbhanja.tech/privacy-policy" },
            ],
          },
        ]}
      />

      <section className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: March 4, 2026</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>When you use our contact form or book a consultation, we collect the information you provide, including your name, email address, business name, and project details. We also collect basic analytics data such as page views and device type to improve our website.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>We use your information to respond to inquiries, provide web development services, send project updates, and improve our website experience. We do not sell or rent your personal information to third parties.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Third-Party Services</h2>
              <p>We use the following third-party services that may process your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>EmailJS for processing contact form submissions</li>
                <li>Calendly for scheduling consultations</li>
                <li>Vercel for website hosting and analytics</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Cookies</h2>
              <p>Our website uses essential cookies to remember your theme preference. We do not use tracking cookies or third-party advertising cookies.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at avikbhanja3@gmail.com.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
              <p>If you have questions about this privacy policy, please contact us at avikbhanja3@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
