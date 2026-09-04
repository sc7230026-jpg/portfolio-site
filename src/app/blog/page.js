"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Calendar, User, Search, Phone, MessageSquare } from "lucide-react";
import { blogPosts, blogCategories, getFeaturedPost } from "@/data/blogData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const featuredPost = getFeaturedPost();

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main>
      {/* Hero Section */}
      <section style={{ background: "linear-gradient(180deg, var(--light) 0%, #FFFFFF 100%)", padding: "120px 0 60px" }}>
        <div className="container text-center">
          <div className="badge">
            <BookOpen size={16} /> SEO Knowledge Hub
          </div>
          <h1 style={{ fontSize: "3.2rem", marginBottom: "20px", lineHeight: "1.2" }}>
            SEO Blog & <span className="text-primary">Digital Marketing Insights</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "750px", margin: "0 auto", lineHeight: "1.7" }}>
            Practical SEO, Local SEO, Google Business Profile, technical SEO, content marketing, and digital marketing strategies to help businesses grow their online visibility.
          </p>
        </div>
      </section>

      {/* Blog Categories Filter Section */}
      <section style={{ padding: "20px 0 40px", borderBottom: "1px solid #eee", background: "white" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "100px",
                  border: selectedCategory === cat ? "1px solid var(--primary)" : "1px solid #e5e5e5",
                  background: selectedCategory === cat ? "var(--primary)" : "var(--light)",
                  color: selectedCategory === cat ? "white" : "var(--dark)",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section (Shown when "All" is selected) */}
      {selectedCategory === "All" && featuredPost && (
        <section className="section-padding" style={{ paddingBottom: "40px" }}>
          <div className="container">
            <div style={{ marginBottom: "20px" }}>
              <span className="badge" style={{ margin: 0 }}>Featured Article</span>
            </div>
            <div
              style={{
                background: "var(--dark)",
                color: "white",
                borderRadius: "28px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.1fr 1fr",
                gap: "40px",
                border: "1px solid rgba(20, 101, 216, 0.2)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Left Content */}
              <div style={{ padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <span
                    style={{
                      background: "var(--primary-glow)",
                      color: "var(--primary)",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      padding: "6px 16px",
                      borderRadius: "100px",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "2.2rem", color: "white", marginBottom: "18px", lineHeight: "1.25" }}>
                  <Link href={`/blog/${featuredPost.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "30px" }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
                    <Calendar size={14} /> {featuredPost.date}
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ padding: "12px 28px" }}>
                    Read Full Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Visual Image Placeholder */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1f1f1f 0%, #121212 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px",
                  position: "relative",
                  borderLeft: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "260px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(20, 101, 216, 0.15) 0%, rgba(20, 101, 216, 0.02) 100%)",
                    border: "2px dashed rgba(20, 101, 216, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <Search size={48} style={{ color: "var(--primary)" }} />
                  <span style={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}>Google Maps Local 3-Pack</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Complete Ranking Strategy & Blueprint</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles Grid */}
      <section className="section-padding" style={{ paddingTop: selectedCategory === "All" ? "40px" : "60px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
            <div>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "8px" }}>
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p style={{ color: "var(--text-muted)", margin: 0 }}>
                Showing {filteredPosts.length} practical guide{filteredPosts.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "30px" }}>
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "white",
                  border: "1px solid #eee",
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  boxShadow: "var(--shadow)",
                }}
              >
                {/* Image Placeholder */}
                <div
                  style={{
                    height: "180px",
                    background: "linear-gradient(135deg, var(--light) 0%, var(--light) 100%)",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: "var(--primary-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    <BookOpen size={28} />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: "white",
                      color: "var(--primary)",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                      background: "rgba(0,0,0,0.7)",
                      color: "white",
                      fontSize: "0.75rem",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <User size={13} /> {post.author}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.3rem", color: "var(--dark)", marginBottom: "12px", lineHeight: "1.35" }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.65", flexGrow: 1, marginBottom: "25px" }}>
                    {post.excerpt}
                  </p>

                  <div style={{ paddingTop: "18px", borderTop: "1px solid #f2f2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontWeight: "700",
                        color: "var(--primary)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--dark-navy) 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.6rem", fontWeight: "800", marginBottom: "20px", color: "white" }}>
            Ready to Dominate Your Local Search Results?
          </h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "650px", margin: "0 auto 40px", color: "rgba(255,255,255,0.9)", lineHeight: "1.7" }}>
            Don&apos;t just read about SEO — let Ahmad SEO implement a custom, data-driven local SEO roadmap for your business.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/seo-audit" className="btn btn-call-white" style={{ padding: "16px 36px" }}>
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+923196902479"
              className="btn btn-whatsapp"
              style={{
                padding: "16px 36px",
              }}
              aria-label="Call Now: 03196902479"
            >
              <Phone size={18} /> Call Now: 03196902479
            </a>
            <a
              href="https://wa.me/923196902479"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: "16px 36px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
