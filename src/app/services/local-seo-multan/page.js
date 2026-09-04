import Link from "next/link";
import { MapPin, Check, ArrowRight, TrendingUp, Search, Globe, Star, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Local SEO Expert in Multan | Rank #1 on Google Maps | Ahmad SEO",
  description: "Professional Local SEO services in Multan, Pakistan. Dominate Google Maps, rank for local keywords, and generate more leads with data-driven local SEO strategies.",
};

export default function LocalSeoMultan() {
  const benefits = [
    { title: "Google Maps 3-Pack Ranking", desc: "Get your business listed in the top 3 Google Maps results for high-intent local searches in Multan." },
    { title: "Local Keyword Domination", desc: "Target keywords like 'best [service] in Multan' to capture customers actively searching for your business." },
    { title: "Local Citation Building", desc: "Build consistent NAP (Name, Address, Phone) citations across 50+ high-authority Pakistani directories." },
    { title: "Multan-Specific Schema Markup", desc: "Implement LocalBusiness structured data to help Google understand your Multan business location and services." },
    { title: "Competitor Analysis", desc: "Reverse-engineer what top-ranking Multan competitors are doing and build a strategy to outperform them." },
    { title: "Review Generation Strategy", desc: "Implement a system to consistently generate 5-star Google reviews that boost your local rankings." },
  ];

  const process = [
    { step: "01", title: "Deep Local SEO Audit", desc: "We analyze your current rankings, citations, GMB profile, and competitor landscape in Multan." },
    { step: "02", title: "Keyword & Market Research", desc: "Identify the highest-value local keywords your Multan customers are searching for." },
    { step: "03", title: "On-Page & Technical Optimization", desc: "Optimize your website structure, meta tags, and content for local search relevance." },
    { step: "04", title: "Citation & Link Building", desc: "Build authoritative local citations and earn backlinks from relevant Pakistani websites." },
    { step: "05", title: "Ongoing Monitoring & Reporting", desc: "Track rankings, traffic, and leads with transparent monthly reports and strategy adjustments." },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, var(--light) 0%, #FFFFFF 100%)", padding: "120px 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className="badge"><MapPin size={16} /> Local SEO Services in Multan</div>
            <h1 style={{ fontSize: "3.2rem", marginBottom: "24px", lineHeight: "1.15" }}>
              Rank #1 on Google for <span className="text-primary">Local Searches in Multan</span>
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "40px" }}>
              As Multan&apos;s leading Local SEO expert, I help businesses dominate Google search results and Maps listings. Get found by customers searching for your services in Multan, Punjab, and across Pakistan.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-primary">Book Free Consultation <ArrowRight size={18} /></Link>
              <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "var(--primary)", color: "white", border: "none" }}>
                <MessageSquare size={18} fill="white" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "var(--dark)", padding: "40px 0", color: "white" }}>
        <div className="container">
          <div className="stats-grid" style={{ textAlign: "center" }}>
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>200+</span>
              <span className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Multan Businesses Ranked</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>310%</span>
              <span className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Average Lead Increase</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>#1</span>
              <span className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Ranked SEO Expert Multan</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>7+</span>
              <span className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Choose Our Local SEO Services in Multan?</h2>
            <p className="section-subtitle">We deliver measurable results through proven local SEO strategies tailored to the Multan market.</p>
          </div>
          <div className="services-grid">
            {benefits.map((b, i) => (
              <div key={i} className="service-card">
                <div className="service-icon"><Search size={28} /></div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Local SEO Process</h2>
            <p className="section-subtitle">A proven 5-step framework to take your Multan business from invisible to #1 on Google.</p>
          </div>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {process.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "25px", marginBottom: "40px", alignItems: "flex-start" }}>
                <div style={{ background: "var(--primary)", color: "white", width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "1rem", flexShrink: 0 }}>
                  {p.step}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about Local SEO services in Multan.</p>
          </div>
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            {[
              { q: "How long does Local SEO take to show results in Multan?", a: "Most businesses in Multan start seeing measurable improvements within 60–90 days. Competitive niches like real estate or medical may take 3–6 months for top 3 rankings." },
              { q: "Do I need a physical office in Multan for Local SEO?", a: "Yes, Google requires a verified physical business address. Service-area businesses can also rank without displaying their address publicly." },
              { q: "How much does Local SEO cost in Multan?", a: "Our Local SEO packages start from PKR 25,000/month. The exact pricing depends on competition, number of keywords, and the scope of optimization needed." },
              { q: "Will I rank on Google Maps in Multan?", a: "Yes! Google Maps ranking is a core focus of our Local SEO strategy. We optimize your Google Business Profile, build local citations, and generate reviews to help you rank in the Local 3-Pack." },
            ].map((faq, i) => (
              <div key={i} style={{ background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #eee", marginBottom: "15px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--dark)" }}>{faq.q}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--dark-navy) 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px", color: "white" }}>Ready to Dominate Local Search in Multan?</h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 40px", color: "rgba(255,255,255,0.9)" }}>
            Get a free Local SEO audit and discover how your Multan business can rank #1 on Google.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+923196902479" className="btn btn-call-white" aria-label="Call Now: 03196902479"><Phone size={18} /> Call: 03196902479</a>
            <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><MessageSquare size={18} /> WhatsApp Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
