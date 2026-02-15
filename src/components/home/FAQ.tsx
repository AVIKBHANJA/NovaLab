import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to hire a freelance web developer?",
    answer:
      "Our freelance web development projects typically range from $500 to $5,000+ depending on complexity. We offer competitive pricing as a student-led studio without sacrificing quality. Simple landing pages start around $500, while full-stack web applications with AI features can range from $2,000 to $5,000+. Every project starts with a free consultation where we provide a transparent, no-obligation quote.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Most websites are delivered within 2-4 weeks. A simple landing page or portfolio site can be ready in just 1 week. More complex projects like e-commerce platforms, SaaS dashboards, or web apps with AI integration typically take 4-8 weeks. We provide a clear timeline and keep you updated at every stage.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We specialize in modern, industry-standard technologies: React, Next.js, TypeScript, and Node.js for web applications; Tailwind CSS for responsive design; PostgreSQL and MongoDB for databases; and various AI/ML frameworks for intelligent features. We choose the best tech stack for each project to ensure fast, scalable, and maintainable solutions.",
  },
  {
    question: "Do you offer ongoing support after the website launches?",
    answer:
      "Yes! We provide ongoing support and maintenance packages to keep your website running smoothly. This includes bug fixes, performance optimization, security updates, content changes, and new feature additions. We're invested in your long-term success, not just the initial launch.",
  },
  {
    question: "Can you build AI-powered features for my website?",
    answer:
      "Absolutely. We specialize in integrating AI capabilities including custom chatbots for customer support, AI content generators, automated workflows, intelligent recommendation systems, and more. We use cutting-edge AI APIs and models to build practical tools that save you time and enhance customer experience.",
  },
  {
    question: "What makes NovaLabs different from other freelance developers?",
    answer:
      "Three things set us apart: First, we combine fresh, modern design thinking with proven technical execution. Second, as a student-led studio we offer agency-quality work at freelancer-friendly prices. Third, you work directly with us - no middlemen, no outsourcing. We treat every project as if it were our own, with clear communication and genuine care for your results.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes! We work with clients worldwide. Most of our clients are remote, and we use tools like Google Meet, Slack, and email for seamless communication across time zones. Whether you're in the US, UK, Europe, or anywhere else, we can deliver the same high-quality service.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative noise-overlay">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_100%_60%/0.05),transparent_60%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-mono text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about hiring a freelance web developer
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
