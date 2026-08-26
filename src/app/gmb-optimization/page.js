import Link from "next/link";
import { MapPin, Check, ArrowRight, Star, Phone, MessageSquare, TrendingUp, Search, Shield } from "lucide-react";

export const metadata = {
  title: "Google My Business (GMB) Optimization | Rank in Google Maps | Ahmad SEO",
  description: "Professional Google Business Profile optimization services in Multan. Get ranked in Google Maps Local 3-Pack, generate more calls, and dominate local search results.",
};

export default function GmbOptimization() {
  const features = [
    { title: "Complete GMB Profile Audit", desc: "We analyze every element of your Google Business Profile — from categories and attributes to photos and Q&A — to identify ranking opportunities." },
    { title: "Review Acquisition Strategy", desc: "Implement a proven review generation system that consistently builds 5-star reviews, boosting your trust signals and local rankings." },
    { title: "Google Maps 3-Pack Ranking", desc: "Optimize your listing to appear in the top 3 Google Maps results for your most valuable local search queries." },
    { title: "Spam Fighting & Listing Protection", desc: "Monitor and report fake competitor listings, keyword-stuffed business names, and spam reviews that hurt your rankings." },
    { title: "Post & Update Strategy", desc: "Create regular Google Posts with offers, events, and updates to keep your profile active and engaging." },
    { title: "Category & Attribute Optimization", desc: "Select the most effective primary and secondary categories to maximize your visibility across different search queries." },
  ];

  const results = [
    { metric: "350%", label: "Increase in GMB Views", icon: "👁️" },
    { metric: "240%", label: "More Phone Calls", icon: "📞" },
    { metric: "180%", label: "Direction Requests Growth", icon: "📍" },
    { metric: "95%", label: "Client Satisfaction Rate", icon: "⭐" },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)", padding: "120px 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className="badge"><MapPin size={16} /> Google Business Profile Expert</div>
            <h1 style={{ fontSize: "3.2rem", marginBottom: "24px", lineHeight: "1.15" }}>
              Google My Business Optimization for <span className="text-primary">Maximum Local Visibility</span>
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "40px" }}>
              Your Google Business Profile is the most powerful free tool for local lead generation. We optimize every element to help your Multan business rank in the Google Maps Local 3-Pack and generate more calls, visits, and enquiries.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn btn-primary">Get GMB Optimization <ArrowRight size={18} /></Link>
              <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "#25D366", color: "white", border: "none" }}>
                <MessageSquare size={18} fill="white" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section style={{ background: "var(--dark)", padding: "50px 0", color: "white" }}>
        <div className="container">
          <div className="stats-grid" style={{ textAlign: "center" }}>
            {results.map((r, i) => (
              <div key={i} className="stat-item">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "5px" }}>{r.icon}</span>
                <span className="stat-number" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>{r.metric}</span>
                <span className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What&apos;s Included in Our GMB Optimization</h2>
            <p className="section-subtitle">A comprehensive Google Business Profile optimization service designed to maximize your local search presence in Multan and Pakistan.</p>
          </div>
          <div className="services-grid">
            {features.map((f, i) => (
              <div key={i} className="service-card">
                <div className="service-icon"><Search size={28} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">How GMB Optimization Works</h2>
            <p className="section-subtitle">Our proven process to transform your Google Business Profile into a lead-generating machine.</p>
          </div>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {[
              { step: "1", title: "GMB Profile Audit", desc: "We conduct a thorough audit of your current listing, analyzing completeness, accuracy, photos, reviews, and competitive positioning." },
              { step: "2", title: "Optimization & Enhancement", desc: "We optimize every field — business description, categories, attributes, services, products, photos, and Q&A sections." },
              { step: "3", title: "Review Strategy Implementation", desc: "We set up a systematic review generation process with templates, follow-up sequences, and response strategies." },
              { step: "4", title: "Ongoing Monitoring & Updates", desc: "We continuously monitor your listing, publish Google Posts, track rankings, and protect against spam and hijacking." },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "25px", marginBottom: "40px", alignItems: "flex-start" }}>
                <div style={{ background: "var(--primary)", color: "white", width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "1.1rem", flexShrink: 0 }}>
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

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #FF6B00 0%, #E65C00 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px", color: "white" }}>Get Your GMB Profile Optimized Today</h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 40px", color: "rgba(255,255,255,0.9)" }}>
            Stop losing customers to competitors. Let us optimize your Google Business Profile and start generating more leads from Google Maps.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+923196902479" className="btn btn-call-white" aria-label="Call Now: 03196902479"><Phone size={18} /> Call: 03196902479</a>
            <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn btn-call-dark"><MessageSquare size={18} /> WhatsApp Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
