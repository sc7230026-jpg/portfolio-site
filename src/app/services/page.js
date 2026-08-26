"use client";

import { useState } from "react";
import { Search, Monitor, Bell, Code, PenTool, Star, Check, ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
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

  const servicesData = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Professional SEO services designed to improve Google rankings, increase organic traffic, and grow online visibility for businesses in Multan and worldwide.",
      icon: <Search size={28} />,
      included: [
        "Local SEO",
        "On-Page SEO",
        "Technical SEO",
        "Keyword Research",
        "SEO Audits",
        "Link Building",
        "Google Maps Ranking",
        "SEO Strategy",
      ],
    },
    {
      title: "Search Engine Marketing (SEM)",
      description: "Results-driven Search Engine Marketing services focused on generating targeted traffic, quality leads, and higher conversions through paid advertising campaigns.",
      icon: <Monitor size={28} />,
      included: [
        "Google Ads Management",
        "PPC Campaign Setup",
        "Keyword Targeting",
        "Conversion Tracking",
        "Ad Optimization",
        "Retargeting Campaigns",
        "Landing Page Optimization",
        "ROI Improvement",
      ],
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Professional social media marketing services to increase brand awareness, audience engagement, and business growth across major social platforms.",
      icon: <Bell size={28} />,
      included: [
        "Facebook Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Content Planning",
        "Social Media Strategy",
        "Paid Social Ads",
        "Audience Growth",
        "Brand Engagement",
      ],
    },
    {
      title: "Web Development",
      description: "Modern, responsive, and SEO-friendly website development services designed for speed, performance, and business growth.",
      icon: <Code size={28} />,
      included: [
        "Business Website Development",
        "WordPress Development",
        "Landing Page Design",
        "Mobile Responsive Design",
        "Speed Optimization",
        "UI/UX Improvements",
        "SEO-Friendly Structure",
        "Website Maintenance",
      ],
    },
    {
      title: "Content Writing",
      description: "High-quality SEO content writing services focused on improving search rankings, audience engagement, and conversion rates.",
      icon: <PenTool size={28} />,
      included: [
        "SEO Blog Writing",
        "Website Content",
        "Service Page Content",
        "Copywriting",
        "AI Content Optimization",
        "Keyword Optimization",
        "Content Strategy",
        "Blog Optimization",
      ],
    },
    {
      title: "Branding",
      description: "Professional branding services to help businesses create a strong online identity, improve trust, and stand out in competitive markets.",
      icon: <Star size={28} />,
      included: [
        "Brand Identity Design",
        "Logo Branding",
        "Visual Identity",
        "Brand Strategy",
        "Social Media Branding",
        "Business Profile Design",
        "Marketing Assets",
        "Brand Positioning",
      ],
    },
  ];

  return (
    <main>
      {/* Services Hero */}
      <section className="section-padding services-hero">
        <div className="container text-center">
          <div className="badge">Professional Digital Marketing Services</div>
          <h1 style={{ fontSize: "3.2rem", marginBottom: "20px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Expert Digital Marketing Solutions for Business Growth in <span className="text-primary">Multan</span>
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.7" }}>
            Helping businesses improve Google rankings, increase organic traffic, generate quality leads, and build powerful online brands with professional digital marketing services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="services">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-included">
                  {service.included.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon">
                        <Check size={10} style={{ color: "var(--primary)", strokeWidth: "3px" }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-cta">
                  Get Started <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section / Contact Form */}
      <section className="section-padding" id="contact" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Ready to Grow Your Business?
              </h2>
              <p style={{ marginBottom: "40px", color: "var(--text-muted)", lineHeight: "1.7" }}>
                Get a free consultation and discover how we can improve your Google rankings, organic traffic, and business growth.
              </p>
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <a href="tel:+923196902479" className="btn btn-primary">
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
                    placeholder="Tell us about your project"
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
