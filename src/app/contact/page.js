"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)", padding: "120px 0 60px" }}>
        <div className="container text-center">
          <div className="badge"><MapPin size={16} /> Get In Touch</div>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Contact <span className="text-primary">Ahmad SEO Expert</span> in Multan
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "650px", margin: "0 auto", lineHeight: "1.7" }}>
            Ready to grow your business with expert Local SEO services in Multan? Get in touch today for a free consultation and let&apos;s discuss your growth strategy.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Let&apos;s Start a Conversation</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "40px" }}>
                Whether you need Local SEO, Google Maps optimization, or a complete SEO strategy for your Multan business, I&apos;m here to help. Reach out through any of these channels:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
                <a href="tel:+923196902479" style={{ display: "flex", alignItems: "center", gap: "15px", textDecoration: "none", color: "var(--dark)", padding: "20px", background: "var(--light)", borderRadius: "16px", transition: "0.3s" }}>
                  <div style={{ width: "50px", height: "50px", background: "var(--primary-glow)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={22} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>Phone / Call</strong>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>03196902479</span>
                  </div>
                </a>

                <a href="https://wa.me/923196902479" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "15px", textDecoration: "none", color: "var(--dark)", padding: "20px", background: "var(--light)", borderRadius: "16px", transition: "0.3s" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(37, 211, 102, 0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MessageSquare size={22} style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>WhatsApp</strong>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>+92 319 690 2479</span>
                  </div>
                </a>

                <a href="mailto:musk01615@gmail.com" style={{ display: "flex", alignItems: "center", gap: "15px", textDecoration: "none", color: "var(--dark)", padding: "20px", background: "var(--light)", borderRadius: "16px", transition: "0.3s" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(59, 130, 246, 0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={22} style={{ color: "#3B82F6" }} />
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>Email</strong>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>musk01615@gmail.com</span>
                  </div>
                </a>

                <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "20px", background: "var(--light)", borderRadius: "16px" }}>
                  <div style={{ width: "50px", height: "50px", background: "rgba(220, 38, 38, 0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MapPin size={22} style={{ color: "#DC2626" }} />
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>Office Location</strong>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Multan, Punjab, Pakistan</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "20px", background: "var(--light)", borderRadius: "16px" }}>
                  <div style={{ width: "50px", height: "50px", background: "var(--primary-glow)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clock size={22} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>Working Hours</strong>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Mon – Sat: 9:00 AM – 7:00 PM (PKT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: "white", padding: "45px", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Send Us a Message</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "30px" }}>Fill out the form and we&apos;ll respond within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name *" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address *" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone / WhatsApp (Optional)" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <textarea rows={5} placeholder="Tell us about your project and goals..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting || submitSuccess}>
                  {isSubmitting ? "Sending..." : submitSuccess ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>Message Sent! <CheckCircle size={18} /></span>
                  ) : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ background: "var(--dark)", padding: "60px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "white" }}>Based in Multan, Serving Pakistan & Beyond</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>Professional Local SEO services from the heart of South Punjab.</p>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "60px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
            <MapPin size={40} style={{ color: "var(--primary)" }} />
            <div style={{ textAlign: "left" }}>
              <strong style={{ fontSize: "1.3rem", display: "block", color: "white" }}>Multan, Punjab, Pakistan</strong>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>SEO Expert Ahmad — Available for local and remote consultations</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
