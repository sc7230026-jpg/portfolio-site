"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ArrowRight, CheckCircle, Shield, Zap, Globe, Phone, MessageSquare } from "lucide-react";

export default function SeoAudit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ url: "", category: "", name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const auditChecks = [
    { icon: <Search size={24} />, title: "Keyword Rankings Analysis", desc: "We check where your website currently ranks for your most important business keywords in Multan and Pakistan." },
    { icon: <Zap size={24} />, title: "Page Speed & Core Web Vitals", desc: "Analyze loading speed, LCP, FID, and CLS scores that directly impact your Google rankings and user experience." },
    { icon: <Globe size={24} />, title: "Mobile Responsiveness Check", desc: "Test your website across all device sizes to ensure mobile users get a perfect experience." },
    { icon: <Shield size={24} />, title: "Technical SEO Health", desc: "Crawl your site for broken links, missing meta tags, duplicate content, indexation issues, and sitemap errors." },
    { icon: <CheckCircle size={24} />, title: "On-Page SEO Review", desc: "Evaluate your title tags, meta descriptions, heading structure, internal linking, and content quality." },
    { icon: <Search size={24} />, title: "Google Business Profile Audit", desc: "Review your GMB listing completeness, categories, reviews, photos, and local ranking potential." },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)", padding: "120px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div className="badge"><Search size={16} /> Free Website Analysis</div>
              <h1 style={{ fontSize: "3rem", marginBottom: "24px", lineHeight: "1.15" }}>
                Get Your <span className="text-primary">Free SEO Audit</span> Report
              </h1>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "30px" }}>
                Discover exactly what&apos;s holding your Multan business back from ranking on Google. Our comprehensive manual SEO audit reveals hidden technical issues, content gaps, and untapped keyword opportunities.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Manual expert review (not automated)", "Actionable recommendations", "Keyword opportunity analysis", "Competitor gap insights", "Delivered within 48 hours"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", color: "var(--dark)", fontSize: "0.95rem" }}>
                    <CheckCircle size={18} style={{ color: "var(--primary)", flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-Step Audit Form */}
            <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <CheckCircle size={60} style={{ color: "#16A34A", marginBottom: "20px" }} />
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Audit Request Received!</h3>
                  <p style={{ color: "var(--text-muted)" }}>We will deliver your free SEO audit report within 48 hours. Check your email!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "5px" }}>Request Free SEO Audit</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "25px" }}>Step {step} of 2</p>

                  {/* Progress Bar */}
                  <div style={{ background: "#eee", height: "6px", borderRadius: "3px", marginBottom: "30px" }}>
                    <div style={{ background: "var(--primary)", height: "100%", borderRadius: "3px", width: step === 1 ? "50%" : "100%", transition: "width 0.4s ease" }}></div>
                  </div>

                  {step === 1 && (
                    <>
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Website URL *</label>
                        <input type="url" placeholder="https://yourwebsite.com" required value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Business Category *</label>
                        <input type="text" placeholder="e.g., Real Estate, Restaurant, Clinic" required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                        Next Step <ArrowRight size={18} />
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Your Name *</label>
                        <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Email Address *</label>
                        <input type="email" placeholder="you@example.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Phone / WhatsApp (Optional)</label>
                        <input type="tel" placeholder="03XXXXXXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button type="button" onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>Back</button>
                        <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>Get Free Audit Report</button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What We Audit */}
      <section className="section-padding" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What Our SEO Audit Covers</h2>
            <p className="section-subtitle">A thorough, manual review of your website&apos;s SEO health — not a generic automated report.</p>
          </div>
          <div className="services-grid">
            {auditChecks.map((ac, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{ac.icon}</div>
                <h3>{ac.title}</h3>
                <p>{ac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #FF6B00 0%, #E65C00 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px", color: "white" }}>Don&apos;t Guess — Know Exactly Where You Stand</h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 40px", color: "rgba(255,255,255,0.9)" }}>
            Get your free, expert-level SEO audit and discover the fastest path to page 1 rankings in Multan.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+923196902479" className="btn" style={{ background: "white", color: "var(--primary)" }}><Phone size={18} /> Call: 03196902479</a>
            <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "var(--dark)", color: "white" }}><MessageSquare size={18} /> WhatsApp Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
