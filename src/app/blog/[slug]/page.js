import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  ChevronRight,
  BookOpen,
  Share2
} from "lucide-react";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/data/blogData";

// Statically generate routes for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate rich SEO metadata for each individual post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Ahmad SEO",
      description: "The requested SEO article could not be found.",
    };
  }

  const siteUrl = "https://ahmad-seo-pro.vercel.app";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.metaTitle || `${post.title} | Ahmad SEO`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Ahmad Local SEO Expert",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
    },
  };
}

// Helper component to render formatted article content
function ArticleContent({ content }) {
  const lines = content.trim().split("\n");
  const elements = [];
  let currentList = [];
  let inTable = false;
  let tableRows = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} style={{ paddingLeft: "24px", margin: "20px 0", lineHeight: "1.8" }}>
          {currentList.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px", color: "var(--dark)" }}>
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(2); // Skip separator row

      elements.push(
        <div key={`table-wrapper-${elements.length}`} style={{ overflowX: "auto", margin: "30px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #eee", fontSize: "0.95rem" }}>
            <thead>
              <tr style={{ background: "var(--light)" }}>
                {headerRow.map((cell, idx) => (
                  <th key={idx} style={{ padding: "14px 18px", textAlign: "left", border: "1px solid #eee", fontWeight: "700" }}>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "white" : "var(--light)" }}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} style={{ padding: "12px 18px", border: "1px solid #eee" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      if (inTable) flushTable();
      return;
    }

    // Markdown Table Check
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      inTable = true;
      const cells = trimmed
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      tableRows.push(cells);
      return;
    } else if (inTable) {
      flushTable();
    }

    // Heading 2
    if (trimmed.startsWith("## ")) {
      flushList();
      const text = trimmed.replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      elements.push(
        <h2 key={`h2-${index}`} id={id} style={{ fontSize: "1.9rem", color: "var(--dark)", margin: "45px 0 20px", lineHeight: "1.3" }}>
          {text}
        </h2>
      );
      return;
    }

    // Heading 3
    if (trimmed.startsWith("### ")) {
      flushList();
      const text = trimmed.replace("### ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      elements.push(
        <h3 key={`h3-${index}`} id={id} style={{ fontSize: "1.4rem", color: "var(--dark)", margin: "35px 0 15px", lineHeight: "1.35" }}>
          {text}
        </h3>
      );
      return;
    }

    // List item (ordered or unordered or checkbox)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || /^\d+\.\s/.test(trimmed)) {
      const text = trimmed.replace(/^[-*]\s+|\d+\.\s+/, "");
      currentList.push(text);
      return;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${index}`} style={{ fontSize: "1.08rem", lineHeight: "1.85", color: "#333", marginBottom: "22px" }}>
        {trimmed}
      </p>
    );
  });

  flushList();
  if (inTable) flushTable();

  return <div className="article-body">{elements}</div>;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Extract H2 headings for Table of Contents
  const headings = post.content
    .split("\n")
    .filter((l) => l.trim().startsWith("## "))
    .map((l) => {
      const text = l.trim().replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return { text, id };
    });

  // Structured Data Schema (BlogPosting & Breadcrumbs)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://ahmad-seo-pro.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Ahmad SEO Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://ahmad-seo-pro.vercel.app/favicon.ico",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ahmad-seo-pro.vercel.app/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ahmad-seo-pro.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://ahmad-seo-pro.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://ahmad-seo-pro.vercel.app/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero / Header Section */}
      <section style={{ background: "linear-gradient(180deg, var(--light) 0%, #FFFFFF 100%)", padding: "120px 0 50px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "30px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Blog
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: "var(--primary)", fontWeight: "600" }}>{post.category}</span>
          </nav>

          {/* Category & Read Time */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
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
              {post.category}
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          {/* H1 Title */}
          <h1 style={{ fontSize: "3rem", lineHeight: "1.2", marginBottom: "25px", color: "var(--dark)" }}>
            {post.title}
          </h1>

          {/* Author & Meta bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "25px", paddingTop: "20px", borderTop: "1px solid #eee", color: "var(--text-muted)", fontSize: "0.9rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "0.85rem" }}>
                AS
              </div>
              <span style={{ fontWeight: "600", color: "var(--dark)" }}>{post.author}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={15} /> {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section style={{ paddingBottom: "50px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div
            style={{
              width: "100%",
              height: "320px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, var(--dark) 0%, #1c1c1c 100%)",
              border: "1px solid rgba(20, 101, 216, 0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: "30px",
              textAlign: "center",
              gap: "15px",
            }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "18px", background: "var(--primary-glow)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={32} />
            </div>
            <h2 style={{ fontSize: "1.6rem", color: "white", margin: 0, maxWidth: "600px" }}>{post.title}</h2>
            <span style={{ color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem" }}>Ahmad SEO Knowledge Hub • {post.category}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          {/* Table of Contents */}
          {headings.length > 0 && (
            <div
              style={{
                background: "var(--light)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #e5e5e5",
                marginBottom: "45px",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px", color: "var(--dark)" }}>
                Table of Contents
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {headings.map((h, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <a
                      href={`#${h.id}`}
                      style={{
                        color: "var(--dark)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.2s ease",
                      }}
                    >
                      <span style={{ color: "var(--primary)", fontWeight: "700" }}>{i + 1}.</span>
                      <span>{h.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body */}
          <ArticleContent content={post.content} />

          {/* In-Article Action Box */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--light) 0%, var(--light) 100%)",
              padding: "40px",
              borderRadius: "24px",
              border: "2px solid var(--primary-glow)",
              margin: "50px 0",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "12px", color: "var(--dark)" }}>
              Need Help Implementing This Strategy?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Get in touch with Ahmad SEO for a free consultation. We help local and national businesses dominate Google search results.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
              <Link href="/seo-audit" className="btn btn-primary" style={{ padding: "14px 28px" }}>
                Book Free Consultation
              </Link>
              <a href="tel:+923196902479" className="btn btn-call-outline" style={{ padding: "14px 28px" }} aria-label="Call Now: 03196902479">
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/923196902479"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "14px 28px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <MessageSquare size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="section-padding" style={{ background: "var(--light)", borderTop: "1px solid #eee" }}>
          <div className="container" style={{ maxWidth: "1100px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 className="section-title" style={{ marginBottom: "10px" }}>Related Articles</h2>
              <p style={{ color: "var(--text-muted)", margin: 0 }}>Continue learning with these recommended guides</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    border: "1px solid #eee",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <span style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.8rem", marginBottom: "10px", textTransform: "uppercase" }}>
                    {rPost.category}
                  </span>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", lineHeight: "1.35", flexGrow: 1 }}>
                    <Link href={`/blog/${rPost.slug}`} style={{ color: "var(--dark)", textDecoration: "none" }}>
                      {rPost.title}
                    </Link>
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    {rPost.excerpt.slice(0, 110)}...
                  </p>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Conversion CTA Section */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--dark-navy) 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.6rem", fontWeight: "800", marginBottom: "18px", color: "white" }}>
            Ready to Scale Your Online Revenue?
          </h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 35px", color: "rgba(255,255,255,0.9)", lineHeight: "1.7" }}>
            Get a tailored search optimization audit and unlock first-page Google rankings.
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
          </div>
        </div>
      </section>
    </main>
  );
}
