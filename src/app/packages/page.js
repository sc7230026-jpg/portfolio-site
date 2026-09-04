import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SEO Packages & Pricing | Ahmad Local SEO Expert",
  description: "Explore our transparent SEO packages and pricing plans. Choose a plan that fits your business stage and dominate search results.",
};

export default function Packages() {
  const plans = [
    {
      name: "Starter Package",
      price: "$299",
      description: "Perfect for local businesses looking to establish their initial Google Maps and search presence.",
      features: [
        "Google Business Profile Setup & Optimization",
        "Local Citations & Directory Submissions (30+)",
        "On-Page SEO Audit & Basic Optimization",
        "5 Keywords Tracking & Weekly Updates",
        "Monthly Performance & Ranking Report",
      ],
      ctaText: "Select Starter",
      highlight: false,
    },
    {
      name: "Growth Package",
      price: "$499",
      description: "Our most popular package designed for expanding regional businesses wanting to dominate their local market.",
      features: [
        "Full GMB Optimization & Weekly Postings",
        "Local Citations & Competitor Link Building",
        "Technical SEO & Speed Optimization",
        "15 Keywords Tracking & Content Optimization",
        "Monthly Strategy & In-depth Reporting",
        "Review & Reputation Management Assistance",
      ],
      ctaText: "Select Growth",
      highlight: true,
    },
    {
      name: "Dominator Package",
      price: "$899",
      description: "A comprehensive digital dominate plan for high-competition markets looking for maximum coverage.",
      features: [
        "Everything in Growth Package",
        "Unlimited GMB Optimization & Postings",
        "Premium Guest Post & Backlink Campaigns",
        "30+ Keywords Tracking & Competitor Analysis",
        "Custom Content Strategy & 2 Blog Posts/mo",
        "Bi-weekly Strategy Calls & Direct WhatsApp Support",
        "Advanced Schema & Structured Data Setup",
      ],
      ctaText: "Select Dominator",
      highlight: false,
    },
  ];

  return (
    <main>
      {/* Packages Hero */}
      <section className="section-padding" style={{ background: "var(--light)" }}>
        <div className="container text-center">
          <div className="badge">Transparent Pricing</div>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
            Invest in Your <span className="text-primary">Success</span>
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "var(--text-muted)" }}>
            Choose a plan that fits your business stage. No hidden fees, just real, measurable growth.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container">
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  border: plan.highlight ? "3px solid var(--primary)" : "1px solid #EEEEEE",
                  position: "relative",
                  transform: plan.highlight ? "scale(1.03)" : "none",
                  boxShadow: plan.highlight ? "0 20px 40px rgba(20, 101, 216, 0.1)" : "var(--shadow)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="badge"
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--primary)",
                      color: "white",
                      boxShadow: "0 10px 20px rgba(20, 101, 216, 0.2)",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: "1.6rem", marginTop: plan.highlight ? "10px" : "0" }}>
                  {plan.name}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "15px 0" }}>
                  {plan.description}
                </p>
                <div style={{ fontSize: "2.8rem", fontWeight: "800", margin: "15px 0", color: "var(--dark)" }}>
                  {plan.price}
                  <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "500" }}>/mo</span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    marginBottom: "35px",
                    flexGrow: 1,
                  }}
                >
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.4",
                      }}
                    >
                      <Check size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`btn ${plan.highlight ? "btn-primary" : "btn-outline"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
