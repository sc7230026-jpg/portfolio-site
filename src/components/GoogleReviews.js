"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { googleReviews } from "@/data/googleReviewsData";

export default function GoogleReviews({ isDark = false }) {
  return (
    <section
      className="section-padding"
      id="reviews"
      style={{
        background: isDark ? "var(--dark)" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "var(--dark-navy)",
      }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "50px" }}>
          <div
            className="badge"
            style={{
              background: isDark ? "rgba(255,255,255,0.08)" : "var(--primary-glow)",
              color: isDark ? "#FFFFFF" : "var(--primary)",
              marginBottom: "15px",
            }}
          >
            Google Business Profile Reviews
          </div>
          <h2
            className="section-title"
            style={{ color: isDark ? "#FFFFFF" : "var(--dark-navy)", marginBottom: "15px" }}
          >
            What Our Clients Say
          </h2>
          <p
            className="section-subtitle"
            style={{
              color: isDark ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Authentic feedback from verified Google Business Profile clients and local business owners.
          </p>
        </div>

        {/* 10 Review Cards Responsive Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {googleReviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "#F8FAFD",
                borderRadius: "20px",
                padding: "26px",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0, 48, 96, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: isDark ? "none" : "0 8px 24px rgba(0, 48, 96, 0.04)",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                {/* Header: Reviewer Info + Google Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* Avatar */}
                    {rev.image ? (
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          position: "relative",
                        }}
                      >
                        <Image
                          src={rev.image}
                          alt={rev.reviewer}
                          width={44}
                          height={44}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "#003060",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "700",
                          fontSize: "0.95rem",
                          flexShrink: 0,
                        }}
                      >
                        {rev.initials}
                      </div>
                    )}

                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: "700",
                            color: isDark ? "#FFFFFF" : "#003060",
                            margin: 0,
                          }}
                        >
                          {rev.reviewer}
                        </h3>
                        {rev.status && (
                          <span
                            style={{
                              background: "#16A34A",
                              color: "#FFFFFF",
                              fontSize: "0.68rem",
                              fontWeight: "700",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              textTransform: "uppercase",
                            }}
                          >
                            {rev.status}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0, 48, 96, 0.6)",
                          marginTop: "2px",
                        }}
                      >
                        {rev.reviewInfo ? `${rev.reviewInfo} • ` : ""}
                        {rev.date}
                      </div>
                    </div>
                  </div>

                  {/* Google G Icon */}
                  <div
                    title="Google Verified Review"
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.65",
                    color: isDark ? "rgba(255,255,255,0.85)" : "#003060",
                    margin: "0 0 16px 0",
                    whiteSpace: "pre-line",
                  }}
                >
                  {rev.review}
                </p>
              </div>

              {/* Footer: Link to Google Reviewer Profile */}
              <div
                style={{
                  paddingTop: "12px",
                  borderTop: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0, 48, 96, 0.08)",
                }}
              >
                <a
                  href={rev.googleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#1060D0",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  View on Google <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
