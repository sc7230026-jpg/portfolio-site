"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Award, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle, 
  ShieldCheck, 
  Search, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Globe, 
  Check,
  Star,
  BookOpen
} from "lucide-react";

export default function Home() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1500);
  };

  const services = [
    {
      title: "Local SEO Services",
      desc: "Dominate search results in Multan. We optimize your business website for localized keywords to ensure high search visibility.",
      path: "/services/local-seo-multan",
      points: ["Multan Specific Keyword Targeting", "Local Schema Markup", "Local Citation Building"]
    },
    {
      title: "Google My Business Optimization",
      desc: "Get featured in the Google Maps Local 3-Pack. Complete audit and ongoing optimization for higher GMB rankings.",
      path: "/gmb-optimization",
      points: ["GMB Profile Audit", "Review Acquisition Strategy", "Google Maps Spam Fighting"]
    },
    {
      title: "Keyword Research & Strategy",
      desc: "Uncover high-intent keywords that your Multan and Pakistan customers are searching for to drive ready-to-buy traffic.",
      path: "/services",
      points: ["Search Volume Analysis", "Competitor Keyword Gap", "Intent-Based Mapping"]
    },
    {
      title: "On-Page SEO Optimization",
      desc: "Align your website content, meta tags, and internal link structure with Google algorithms for higher organic rankings.",
      path: "/services",
      points: ["Meta Title & Description Tuning", "H1-H6 Heading Optimization", "Content Quality Enhancement"]
    },
    {
      title: "Technical SEO Audits & Fixes",
      desc: "Speed up your site, fix crawl errors, and optimize mobile responsiveness to improve Google crawling and user experience.",
      path: "/seo-audit",
      points: ["Page Speed Optimization", "Sitemap & Robots.txt Tuning", "Indexation Issue Resolutions"]
    }
  ];

  const caseStudies = [
    {
      niche: "Real Estate Agency in Multan",
      growth: "310% Increase in Leads",
      before: "Ranked Page 4 for key terms",
      after: "Ranked #1 for 'Best apartments in Multan'",
      keywords: ["buy property multan (#1)", "multan real estate agency (#2)"],
      description: "Implemented deep local landing pages, schema setup, and local directory listings to dominate local property searches."
    },
    {
      niche: "Private Dental Clinic",
      growth: "240% Growth in Calls",
      before: "Google Maps visibility was under 15%",
      after: "Top 3 Local Pack for all dentist searches",
      keywords: ["best dentist in multan (#1)", "dental clinic multan (#1)"],
      description: "Optimized GMB profile structure, resolved duplicate listing issues, and executed a targeted review campaign."
    }
  ];

  const blogPosts = [
    {
      title: "What Is Local SEO? A Beginner's Guide to Ranking in Google Maps",
      desc: "Learn what local SEO is, how it works, and why every business needs Google Maps optimization to attract customers.",
      date: "August 20, 2026",
      readTime: "8 min read",
      path: "/blog/what-is-local-seo"
    },
    {
      title: "How to Optimize Your Google Business Profile for Local SEO",
      desc: "Step-by-step blueprint to optimize your Google Business Profile to rank in the coveted Local 3-Pack.",
      date: "August 18, 2026",
      readTime: "7 min read",
      path: "/blog/google-business-profile-optimization"
    },
    {
      title: "What Are Backlinks and Why Are They Important for SEO?",
      desc: "Understand how backlinks build domain authority, drive referral traffic, and improve Google rankings.",
      date: "August 15, 2026",
      readTime: "6 min read",
      path: "/blog/what-are-backlinks"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF5F0 100%)", padding: "140px 0 100px" }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge">
                <Award size={16} /> Certified Google SEO Expert in Multan
              </div>
              <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--dark)", marginBottom: "24px", lineHeight: "1.15" }}>
                Local SEO Expert in Multan – Dominate Your Market with <span className="text-primary">Precision SEO</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "35px", lineHeight: "1.7" }}>
                Double your organic leads and traffic. I help local businesses in Multan and across Pakistan rank on the first page of Google through professional Local SEO services and Google Business Profile optimization.
              </p>
              
              <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <a href="#contact" className="btn btn-primary" style={{ padding: "16px 30px" }}>
                  Book Free Consultation <ArrowRight size={18} />
                </a>
                <a 
                  href="https://wa.me/923196902479" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  style={{ 
                    padding: "16px 30px", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "10px",
                    background: "#25D366",
                    color: "white",
                    border: "none"
                  }}
                >
                  <MessageSquare size={18} fill="white" /> Chat on WhatsApp Now
                </a>
              </div>

              {/* Trust signals */}
              <div style={{ display: "flex", gap: "30px", marginTop: "40px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <ShieldCheck size={28} className="text-primary" />
                  <div>
                    <strong style={{ display: "block", fontSize: "1rem" }}>Certified SEO Expert</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Google & Semrush Accredited</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <TrendingUp size={28} className="text-primary" />
                  <div>
                    <strong style={{ display: "block", fontSize: "1rem" }}>200%+ Organic Growth</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Average Client Result</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Graphic Section */}
            <div className="hero-image" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div 
                style={{ 
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "1/1",
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-alt) 100%)",
                  padding: "40px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  border: "2px solid rgba(255, 107, 0, 0.2)"
                }}
              >
                {/* Ranking Chart Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>Google Rank Performance</span>
                    <h3 style={{ color: "white", fontSize: "1.4rem", margin: "5px 0 0" }}>Local Rank Tracker</h3>
                  </div>
                  <span style={{ background: "rgba(255,107,0,0.1)", color: "var(--primary)", padding: "5px 12px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: "700" }}>Multan, PK</span>
                </div>

                {/* Simulated Chart */}
                <div style={{ display: "flex", alignItems: "flex-end", height: "180px", gap: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px", position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, right: 0, top: "25%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
                  <div style={{ position: "absolute", left: 0, right: 0, top: "50%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
                  <div style={{ position: "absolute", left: 0, right: 0, top: "75%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div style={{ height: "35px", width: "100%", background: "rgba(255,255,255,0.05)", borderRadius: "6px" }}></div>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", marginTop: "8px" }}>Month 1</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div style={{ height: "65px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "6px" }}></div>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", marginTop: "8px" }}>Month 2</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div style={{ height: "110px", width: "100%", background: "rgba(255, 107, 0, 0.4)", borderRadius: "6px" }}></div>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", marginTop: "8px" }}>Month 3</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div style={{ height: "155px", width: "100%", background: "var(--primary)", borderRadius: "6px", boxShadow: "0 0 15px var(--primary)" }}></div>
                    <span style={{ color: "var(--primary)", fontSize: "0.7rem", fontWeight: "700", marginTop: "8px" }}>Month 4</span>
                  </div>
                </div>

                {/* Floating Keywords */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                  <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.05)", color: "white", padding: "6px 12px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    📍 SEO Expert in Multan <strong style={{ color: "var(--primary)" }}>#1</strong>
                  </span>
                  <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.05)", color: "white", padding: "6px 12px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    🚀 Local SEO Pakistan <strong style={{ color: "var(--primary)" }}>#1</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Targeting Info Row */}
      <section style={{ background: "var(--dark)", padding: "30px 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <MapPin size={24} className="text-primary" />
            <span>Targeting Customers in <strong>Multan, Punjab, Pakistan</strong> & Globally</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Globe size={24} className="text-primary" />
            <span>High-Performing <strong>Local SEO Services in Pakistan</strong></span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" style={{ padding: "80px 0", background: "var(--light)" }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Multan GMB Listings Ranked</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Retention Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5M+</span>
              <span className="stat-label">Organic Impressions Driven</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7+ Years</span>
              <span className="stat-label">Search Marketing Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="services">
        <div className="container">
          <div className="text-center">
            <div className="badge">Our SEO Expertise</div>
            <h2 className="section-title">Result-Oriented Local SEO Services</h2>
            <p className="section-subtitle">
              Rank higher, drive organic store visits, and capture ready-to-buy search queries in Multan.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc, idx) => (
              <article key={idx} className="service-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="service-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Search size={28} />
                </div>
                <h3>{svc.title}</h3>
                <p style={{ flexGrow: 1 }}>{svc.desc}</p>
                <ul className="service-included" style={{ marginBottom: "25px" }}>
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)" }}>
                      <span className="check-icon" style={{ width: "16px", height: "16px", background: "var(--primary-glow)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Check size={8} style={{ color: "var(--primary)", strokeWidth: "4px" }} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={svc.path} className="service-cta">
                  Learn More <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section className="section-padding" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="text-center">
            <div className="badge">Proven SEO Results</div>
            <h2 className="section-title">Real Growth Stories in Multan</h2>
            <p className="section-subtitle">
              See how we optimized local businesses to capture first-page real estate on Google.
            </p>
          </div>

          <div className="case-grid">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="case-card" style={{ background: "white", borderRadius: "24px", overflow: "hidden", border: "1px solid #eee" }}>
                <div style={{ background: "var(--dark)", padding: "30px", color: "white" }}>
                  <span className="case-tag" style={{ background: "var(--primary-glow)", color: "var(--primary)", marginBottom: "15px" }}>{cs.niche}</span>
                  <h3 style={{ fontSize: "1.8rem", color: "white", margin: 0 }}>{cs.growth}</h3>
                </div>
                <div className="case-content" style={{ padding: "40px" }}>
                  <p style={{ color: "var(--text-muted)", marginBottom: "25px", fontSize: "0.95rem" }}>{cs.description}</p>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px", background: "var(--light)", padding: "20px", borderRadius: "16px" }}>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>BEFORE</span>
                      <strong style={{ fontSize: "0.9rem", color: "#DC2626" }}>{cs.before}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>AFTER</span>
                      <strong style={{ fontSize: "0.9rem", color: "#16A34A" }}>{cs.after}</strong>
                    </div>
                  </div>

                  <div style={{ marginBottom: "30px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "10px" }}>Top Ranking Keywords:</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {cs.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} style={{ background: "var(--primary-glow)", color: "var(--primary)", fontSize: "0.8rem", padding: "6px 12px", borderRadius: "100px", fontWeight: "600" }}>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/results" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                    View Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding" style={{ background: "var(--dark)", color: "white" }}>
        <div className="container">
          <div className="text-center">
            <div className="badge" style={{ background: "rgba(255,255,255,0.05)", color: "white" }}>Client Success</div>
            <h2 className="section-title" style={{ color: "white" }}>What Local Businesses Say</h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)" }}>
              Read reviews from companies that trusted our SEO strategies to dominate search engine results.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--primary)" stroke="var(--primary)" />)}
              </div>
              <p style={{ fontStyle: "italic", marginBottom: "25px", fontSize: "1.1rem", lineHeight: "1.7", color: "rgba(255,255,255,0.9)" }}>
                &quot;Working with Ahmad was the best decision for our real estate business. We are ranking #1 for major local property search terms in Multan, and our monthly organic lead count has tripled!&quot;
              </p>
              <div className="client-info">
                <h4 style={{ color: "white", fontSize: "1.1rem" }}>Rana Zafar</h4>
                <p style={{ color: "var(--primary)", fontSize: "0.85rem", margin: 0 }}>Director, Multan Heights Real Estate</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--primary)" stroke="var(--primary)" />)}
              </div>
              <p style={{ fontStyle: "italic", marginBottom: "25px", fontSize: "1.1rem", lineHeight: "1.7", color: "rgba(255,255,255,0.9)" }}>
                &quot;Our clinic was virtually invisible on Google Maps. Ahmad reorganized our Google Business Profile and local citations. Now, we receive calls daily from patients finding us on Maps.&quot;
              </p>
              <div className="client-info">
                <h4 style={{ color: "white", fontSize: "1.1rem" }}>Dr. H. Baig</h4>
                <p style={{ color: "var(--primary)", fontSize: "0.85rem", margin: 0 }}>Chief Surgeon, Multan Dental Suite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding" id="blog">
        <div className="container">
          <div className="text-center">
            <div className="badge">SEO Resources</div>
            <h2 className="section-title">Latest Local SEO Insights</h2>
            <p className="section-subtitle">
              Read free SEO tutorials and guides on how to optimize your Multan or Pakistan-based business website.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "20px" }}>
            {blogPosts.map((post, idx) => (
              <article key={idx} style={{ background: "white", border: "1px solid #eee", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s ease" }}>
                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "15px" }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", color: "var(--dark)" }}>
                    <Link href={post.path} style={{ color: "inherit", textDecoration: "none" }}>{post.title}</Link>
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", flexGrow: 1, marginBottom: "25px" }}>{post.desc}</p>
                  
                  <Link href={post.path} style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", color: "var(--primary)", textDecoration: "none", fontSize: "0.9rem" }}>
                    Read Full Article <BookOpen size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #FF6B00 0%, #E65C00 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "20px", color: "white" }}>Ready to Scale Your Business?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto 40px", color: "rgba(255,255,255,0.9)", lineHeight: "1.7" }}>
            Get ranked on Google, generate more customer enquiries, and dominate local search in Multan, Pakistan. Let&apos;s start today.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            <a href="tel:+923196902479" className="btn" style={{ background: "white", color: "var(--primary)", padding: "16px 36px" }}>
              <Phone size={18} fill="var(--primary)" /> Call Now: 03196902479
            </a>
            <a 
              href="https://wa.me/923196902479" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ 
                background: "var(--dark)", 
                color: "white", 
                padding: "16px 36px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <MessageSquare size={18} fill="white" /> Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding" id="contact" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="badge">Get In Touch</div>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
                Claim Your Free SEO Audit Consultation
              </h2>
              <p style={{ marginBottom: "40px", color: "var(--text-muted)", lineHeight: "1.7" }}>
                Fill out the form with details of your Multan-based website. I will manually review your site speed, keyword rankings, and GMB listing setup to provide a free actionable growth roadmap.
              </p>
              
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <a href="tel:+923196902479" className="btn btn-outline" style={{ background: "white" }}>
                  Call Now
                </a>
                <a 
                  href="https://wa.me/923196902479" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows={4}
                    placeholder="Describe your business and website URL"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={isSubmitting || submitSuccess}
                >
                  {isSubmitting ? (
                    "Sending Request..."
                  ) : submitSuccess ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      Success! We will contact you soon. <CheckCircle size={18} />
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
