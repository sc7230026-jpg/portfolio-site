"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, ArrowRight, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";

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

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge">
                <Award size={18} /> Top Rated SEO Expert 2026
              </div>
              <h1>
                Dominate Your Local Market with{" "}
                <span className="text-primary">Precision SEO.</span>
              </h1>
              <p>
                I help businesses transform their digital presence into a lead-generating machine through data-driven local SEO strategies and Google Business Profile optimization.
              </p>
              <div className="hero-btns">
                <a href="#contact" className="btn btn-primary">
                  Book Free Consultation <ArrowRight size={18} />
                </a>
                <Link href="/results" className="btn btn-outline">
                  View Success Stories
                </Link>
              </div>

              <div
                className="social-profile-row"
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "40px",
                  paddingTop: "30px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <a
                  href="https://www.facebook.com/people/Ahmad-Local-SEO-Expert/61583047634466/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-item"
                  title="Facebook"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rana-ahmad-17b8253b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-item"
                  title="LinkedIn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://share.google/tWHn3BsId53ornGhX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-item"
                  title="Google Business"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955.977 15.34 0 12.24 0 5.48 0 0 5.373 0 12s5.48 12 12.24 12c7.06 0 11.75-4.91 11.75-11.95 0-.806-.08-1.42-.18-1.765H12.24z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/923196902479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-item"
                  title="WhatsApp"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.873-6.958C16.608 1.982 14.135.96 11.51.959c-5.44 0-9.866 4.415-9.869 9.85-.001 1.77.476 3.498 1.38 5.04L1.97 20.54l4.677-1.386zM17.47 14.887c-.313-.156-1.854-.915-2.131-1.015-.278-.1-.481-.15-.681.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.663.069-.313-.156-1.32-.486-2.515-1.553-.93-.83-1.558-1.856-1.74-2.169-.184-.313-.02-.483.137-.638.141-.14.313-.365.47-.55.156-.185.209-.313.313-.52.104-.207.052-.39-.026-.547-.078-.156-.681-1.64-.933-2.247-.246-.593-.497-.512-.681-.52-.176-.008-.378-.01-.58-.01-.202 0-.531.076-.809.378-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.238 3.131.15.2 2.138 3.264 5.18 4.58.723.312 1.288.499 1.729.639.727.23 1.39.198 1.912.12.582-.087 1.854-.759 2.115-1.456.26-.697.26-1.296.183-1.422-.078-.126-.28-.2-.594-.356z" />
                  </svg>
                </a>
                <a
                  href="mailto:musk01615@gmail.com"
                  className="social-profile-item"
                  title="Email"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--primary) 0%, #FF8C40 100%)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.1)",
                  border: "8px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "4rem",
                  fontWeight: "800",
                  fontFamily: "var(--font-sans)",
                }}
              >
                AS
              </div>
              <div className="floating-card float-1">
                <div
                  style={{
                    background: "var(--primary-glow)",
                    padding: "10px",
                    borderRadius: "12px",
                    color: "var(--primary)",
                    display: "flex",
                  }}
                >
                  <TrendingUp size={24} />
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "1.2rem" }}>+240%</strong>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>Organic Growth</p>
                </div>
              </div>
              <div className="floating-card float-2">
                <div
                  style={{
                    background: "#22C55E20",
                    padding: "10px",
                    borderRadius: "12px",
                    color: "#22C55E",
                    display: "flex",
                  }}
                >
                  <CheckCircle size={24} />
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "1.2rem" }}>Certified</strong>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>Google SEO Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <div className="logo-grid">
            <span>GOOGLE</span>
            <span>FIVERR</span>
            <span>UPWORK</span>
            <span>LINKEDIN</span>
            <span>TRUSTPILOT</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clients Scaled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1200+</span>
              <span className="stat-label">Keywords Ranked</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="case-studies section-padding" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real results for real businesses. See how we&apos;ve helped our clients achieve massive growth.
            </p>
          </div>
          <div className="case-grid">
            <div className="case-card">
              <div className="case-viz" style={{ display: "flex", alignItems: "flex-end", height: "240px", gap: "15px" }}>
                <div className="chart-bar" style={{ height: "30%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "50%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "70%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "95%", width: "40px" }}></div>
              </div>
              <div className="case-content">
                <span className="case-tag">Real Estate</span>
                <h3>300% Growth in Leads</h3>
                <Link href="/results" className="text-primary" style={{ fontWeight: "600" }}>
                  View Full Case Study →
                </Link>
              </div>
            </div>
            <div className="case-card">
              <div className="case-viz" style={{ display: "flex", alignItems: "flex-end", height: "240px", gap: "15px", background: "#FFF7ED" }}>
                <div className="chart-bar" style={{ height: "20%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "40%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "60%", width: "40px" }}></div>
                <div className="chart-bar" style={{ height: "90%", width: "40px" }}></div>
              </div>
              <div className="case-content">
                <span className="case-tag">Medical Clinic</span>
                <h3>Dominating Map Rankings</h3>
                <Link href="/results" className="text-primary" style={{ fontWeight: "600" }}>
                  View Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" style={{ color: "white" }}>
              Client Feedback
            </h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                &quot;Ahmad&apos;s expertise in GMB is unmatched. We saw a 200% increase in calls within the first 60 days.&quot;
              </p>
              <div className="client-info">
                <h4>James Wilson</h4>
                <p>CEO, Metro Home Services</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                &quot;The most professional SEO consultant I&apos;ve worked with. Transparent and data-driven.&quot;
              </p>
              <div className="client-info">
                <h4>Sarah Jenkins</h4>
                <p>Founder, Glow Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Form */}
      <section className="section-padding" id="contact" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Ready to Scale?
              </h2>
              <p style={{ marginBottom: "40px" }}>
                Send a message or call directly to book your free strategy session.
              </p>
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <a href="tel:03196902479" className="btn btn-primary">
                  Call Now
                </a>
                <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  WhatsApp
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
                    placeholder="Message"
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
                    "Sending..."
                  ) : submitSuccess ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      Success! <CheckCircle size={18} />
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
