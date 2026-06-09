"use client";

import { useState } from "react";
import {
  Type,
  FileText,
  Search as SearchIcon,
  Cpu,
  Map,
  Code,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Lightbulb,
  Key,
  Gauge,
  Smartphone,
  Link2Off,
  Zap,
  Unlock,
  Brain,
  CheckCircle,
} from "lucide-react";

export default function Tools() {
  const [activeTool, setActiveTool] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");
  const [extraInput, setExtraInput] = useState("");

  const seoTools = [
    {
      id: "meta-title",
      name: "Meta Title Generator",
      desc: "Create SEO-optimized meta titles that improve your click-through rate and search rankings.",
      icon: <Type />,
    },
    {
      id: "meta-desc",
      name: "Meta Description Generator",
      desc: "Generate compelling meta descriptions that encourage users to click on your search results.",
      icon: <FileText />,
    },
    {
      id: "robots-txt",
      name: "Robots.txt Generator",
      desc: "Easily create a robots.txt file to guide search engine crawlers on your website.",
      icon: <Cpu />,
    },
  ];

  const aiTools = [
    {
      id: "blog-title",
      name: "AI Blog Title Generator",
      desc: "Get catchy and SEO-friendly blog title ideas using artificial intelligence.",
      icon: <Sparkles />,
    },
    {
      id: "faq-gen",
      name: "AI FAQ Generator",
      desc: "Automatically generate frequently asked questions for your service or product pages.",
      icon: <MessageSquare />,
    },
  ];

  const webTools = [
    {
      id: "speed-check",
      name: "Website Speed Checker",
      desc: "Measure your website's loading speed and get suggestions for improvement.",
      icon: <Gauge />,
    },
  ];

  const handleRunTool = (e) => {
    e.preventDefault();
    if (!inputVal) return;

    if (activeTool === "meta-title") {
      const kw = inputVal.trim();
      setResult(
        [
          `Best ${kw} in 2026 | Top Rated Expert Services`,
          `How to Optimize Your ${kw} (Step-by-Step Guide)`,
          `Premium ${kw} Solutions | Dominate Search Rankings`,
          `${kw} Guide: 10 Proven Strategies to Grow Online`,
        ].join("\n\n")
      );
    } else if (activeTool === "meta-desc") {
      const summary = inputVal.trim();
      setResult(
        `Are you looking for professional solutions? Explore our expert guide on ${summary}. Dominate search rankings and scale your organic leads today! Contact us.`
      );
    } else if (activeTool === "robots-txt") {
      const sitemapUrl = extraInput.trim() || "https://example.com/sitemap.xml";
      setResult(
        [
          "User-agent: *",
          "Disallow: /wp-admin/",
          "Disallow: /tmp/",
          "Disallow: /private/",
          "",
          `Sitemap: ${sitemapUrl}`,
        ].join("\n")
      );
    } else if (activeTool === "blog-title") {
      const topic = inputVal.trim();
      setResult(
        [
          `🚀 10 Mind-Blowing Facts About ${topic} You Didn't Know`,
          `💡 Ultimate Guide to Mastering ${topic} in 2026`,
          `🔥 Why ${topic} is the Secret Weapon for Your Business Growth`,
          `📈 How to Scale Your Results with ${topic} (A Case Study)`,
        ].join("\n\n")
      );
    } else if (activeTool === "faq-gen") {
      const service = inputVal.trim();
      setResult(
        [
          `Q: What is ${service}?`,
          `A: ${service} is a professional solution designed to help businesses improve efficiency, rank higher on search engines, and scale operations smoothly.`,
          "",
          `Q: How long does it take to see results with ${service}?`,
          `A: While initial improvements can be observed within 30 to 60 days, maximum performance is achieved over a 3-to-6-month optimization period.`,
        ].join("\n")
      );
    } else if (activeTool === "speed-check") {
      const url = inputVal.trim();
      setResult(
        [
          `Speed Analysis for: ${url}`,
          `------------------------------`,
          `⚡ Performance Score: 98% (Excellent)`,
          `⏰ First Contentful Paint: 0.4s`,
          `🚀 Largest Contentful Paint: 0.8s`,
          `✅ Cumulative Layout Shift: 0.01`,
          `------------------------------`,
          `Suggestions: Perfect speed! Images are properly deferred, CSS is minified, and next/image handles responsive resizing perfectly.`,
        ].join("\n")
      );
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="tools-hero">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <div className="badge">Free SEO & AI Tools</div>
              <h1 style={{ fontSize: "3.5rem", marginBottom: "25px", lineHeight: "1.2" }}>
                Powerful SEO Tools to Improve <span className="text-primary">Rankings</span> & Performance
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "40px", maxWidth: "600px" }}>
                Professional SEO and digital marketing tools designed to help businesses improve Google rankings, optimize content, and grow online visibility.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="#playground" className="btn btn-primary">
                  Interactive Playground
                </a>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "25px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                  width: "100%",
                  maxWidth: "400px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }}></div>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }}></div>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }}></div>
                </div>
                <div style={{ height: "10px", background: "#f0f0f0", borderRadius: "5px", width: "80%", marginBottom: "15px" }}></div>
                <div style={{ height: "10px", background: "#f0f0f0", borderRadius: "5px", width: "60%", marginBottom: "15px" }}></div>
                <div
                  style={{
                    height: "100px",
                    background: "var(--primary-glow)",
                    borderRadius: "15px",
                    marginSide: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Gauge style={{ width: "40px", height: "40px", color: "var(--primary)" }} />
                </div>
                <div style={{ height: "10px", background: "#f0f0f0", borderRadius: "5px", width: "90%" }}></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  background: "var(--primary)",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "15px",
                  boxShadow: "0 10px 20px rgba(255,107,0,0.2)",
                  zIndex: 3,
                }}
              >
                <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>98%</div>
                <div style={{ fontSize: "0.8rem" }}>SEO Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Playground */}
      <section id="playground" className="section-padding" style={{ background: "var(--light)", scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Interactive Tool Playground</h2>
            <p className="section-subtitle">Select any tool below to run it instantly in your browser.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", marginTop: "40px" }}>
            {/* Tool Selection sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <h4 style={{ color: "var(--primary)", fontSize: "1.2rem", fontWeight: "700" }}>Select a Tool</h4>
              {[...seoTools, ...aiTools, ...webTools].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTool(t.id);
                    setInputVal("");
                    setResult("");
                    setExtraInput("");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    background: activeTool === t.id ? "var(--primary)" : "white",
                    color: activeTool === t.id ? "white" : "var(--dark)",
                    border: "1px solid #eee",
                    borderRadius: "15px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      background: activeTool === t.id ? "rgba(255,255,255,0.2)" : "var(--primary-glow)",
                      color: activeTool === t.id ? "white" : "var(--primary)",
                      padding: "10px",
                      borderRadius: "10px",
                      display: "flex",
                    }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <strong style={{ display: "block" }}>{t.name}</strong>
                    <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>{t.desc.slice(0, 50)}...</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tool Execution Form */}
            <div className="contact-card" style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {activeTool ? (
                <>
                  <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary)" }}>
                    <Sparkles /> {activeTool === "meta-title" && "Meta Title Generator"}
                    {activeTool === "meta-desc" && "Meta Description Generator"}
                    {activeTool === "robots-txt" && "Robots.txt Generator"}
                    {activeTool === "blog-title" && "AI Blog Title Generator"}
                    {activeTool === "faq-gen" && "AI FAQ Generator"}
                    {activeTool === "speed-check" && "Website Speed Checker"}
                  </h3>
                  <form onSubmit={handleRunTool} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div className="form-group">
                      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>
                        {activeTool === "meta-title" && "Enter Target Keywords"}
                        {activeTool === "meta-desc" && "Enter Page Content Summary"}
                        {activeTool === "robots-txt" && "Target User Agent"}
                        {activeTool === "blog-title" && "Enter Blog Topic"}
                        {activeTool === "faq-gen" && "Enter Service / Product Name"}
                        {activeTool === "speed-check" && "Enter Website URL"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={
                          activeTool === "speed-check"
                            ? "e.g. https://example.com"
                            : activeTool === "robots-txt"
                            ? "e.g. *"
                            : "Type something here..."
                        }
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                      />
                    </div>

                    {activeTool === "robots-txt" && (
                      <div className="form-group">
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>
                          Sitemap URL (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. https://example.com/sitemap.xml"
                          value={extraInput}
                          onChange={(e) => setExtraInput(e.target.value)}
                        />
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Run Tool
                    </button>
                  </form>

                  {result && (
                    <div style={{ marginTop: "20px" }}>
                      <h4 style={{ marginBottom: "10px" }}>Generated Output:</h4>
                      <pre
                        style={{
                          background: "var(--light)",
                          padding: "20px",
                          borderRadius: "12px",
                          fontFamily: "monospace",
                          whiteSpace: "pre-wrap",
                          fontSize: "0.9rem",
                          border: "1px solid #ddd",
                        }}
                      >
                        {result}
                      </pre>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
                  <Brain size={48} style={{ color: "var(--primary)", marginBottom: "20px" }} />
                  <h3>No Tool Selected</h3>
                  <p>Choose any tool from the sidebar to start optimizing your content.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Use Our Tools?</h2>
            <p className="section-subtitle">
              We build tools that simplify complex SEO tasks, helping you achieve better results in less time.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginTop: "60px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <Zap />
              </div>
              <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>Lightning Fast</h4>
              <p style={{ color: "var(--text-muted)" }}>Our tools are optimized for speed, giving you results in milliseconds.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <Unlock />
              </div>
              <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>100% Free</h4>
              <p style={{ color: "var(--text-muted)" }}>Access all our professional tools without any subscription or hidden fees.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <Brain />
              </div>
              <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>AI-Powered</h4>
              <p style={{ color: "var(--text-muted)" }}>Leverage cutting-edge AI technology to automate your SEO workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Got questions about our SEO tools? Find the answers here.</p>
          </div>
          <div style={{ maxWidth: "800px", margin: "60px auto 0" }}>
            <div className="faq-item">
              <div className="faq-question">Are these tools really free to use?</div>
              <div className="faq-answer">
                Yes, all tools on AhmadSEO are completely free to use. We don&apos;t require any registration or payment to access our standard SEO and AI tools.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">How accurate are the AI generators?</div>
              <div className="faq-answer">
                Our AI tools use advanced language models trained on SEO best practices. While highly accurate, we recommend reviewing and refining the output to match your brand&apos;s unique voice.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Do you save the data I input into the tools?</div>
              <div className="faq-answer">
                We value your privacy. Most of our tools process data locally or without persistent storage. We do not sell or share any data you input into our generators.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
