import { Award, ShieldAlert, BarChart3, Globe, ThumbsUp } from "lucide-react";

export const metadata = {
  title: "SEO Results & Case Studies | Ahmad Local SEO Expert",
  description: "Explore our track record of ranking businesses at the top of Google search results with proven SEO results and case studies.",
};

export default function Results() {
  const caseStudies = [
    {
      title: "Google Maps #1 Ranking",
      description: "Dominating the local 3-pack for competitive service keywords. Driving 3x more phone calls and direction requests.",
      tag: "Local SEO",
      chartHeights: ["25%", "50%", "75%", "100%"],
    },
    {
      title: "Organic Search Domination",
      description: "Ranked #1 for high-intent transactional keywords, resulting in a 240% increase in monthly organic traffic.",
      tag: "Organic Growth",
      chartHeights: ["30%", "45%", "65%", "95%"],
      background: "#FFF7ED",
    },
    {
      title: "E-Commerce Organic Sales Boost",
      description: "Optimized product schema and site architecture, leading to a 180% surge in online sales in 90 days.",
      tag: "E-Commerce SEO",
      chartHeights: ["20%", "40%", "70%", "85%"],
    },
  ];

  return (
    <main>
      {/* Results Hero */}
      <section className="section-padding" style={{ background: "var(--dark)", color: "white" }}>
        <div className="container text-center">
          <div className="badge">Proof of Performance</div>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
            Data That Speaks For <span className="text-primary">Itself</span>
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", opacity: 0.8 }}>
            We don&apos;t just promise results; we deliver them. Explore our track record of ranking businesses at the top of search results.
          </p>
        </div>
      </section>

      {/* Ranking Proof Gallery */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Live Ranking Proofs</h2>
          <p className="section-subtitle">
            Take a look at how we&apos;ve scaled search visibility and generated high-quality leads for our clients.
          </p>
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <div
                  className="case-viz"
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "240px",
                    gap: "15px",
                    background: study.background || "#F8F9FA",
                  }}
                >
                  {study.chartHeights.map((height, idx) => (
                    <div key={idx} className="chart-bar" style={{ height, width: "40px" }}></div>
                  ))}
                </div>
                <div className="case-content">
                  <span className="case-tag">{study.tag}</span>
                  <h3>{study.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "10px", lineHeight: "1.6" }}>
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
