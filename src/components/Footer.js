import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "60px", paddingBottom: "60px" }}>
          <div>
            <Link href="/" className="logo" style={{ color: "white", marginBottom: "25px", display: "block" }}>
              Ahmad<span>SEO</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8", marginBottom: "30px" }}>
              Professional SEO Expert in Multan helping brands dominate Google search results and achieve measurable online growth through data-driven strategies.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://www.facebook.com/people/Ahmad-Local-SEO-Expert/61583047634466/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                title="Facebook"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rana-ahmad-17b8253b4/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                title="LinkedIn"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://wa.me/923196902479"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-footer"
                title="WhatsApp"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.873-6.958C16.608 1.982 14.135.96 11.51.959c-5.44 0-9.866 4.415-9.869 9.85-.001 1.77.476 3.498 1.38 5.04L1.97 20.54l4.677-1.386zM17.47 14.887c-.313-.156-1.854-.915-2.131-1.015-.278-.1-.481-.15-.681.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.663.069-.313-.156-1.32-.486-2.515-1.553-.93-.83-1.558-1.856-1.74-2.169-.184-.313-.02-.483.137-.638.141-.14.313-.365.47-.55.156-.185.209-.313.313-.52.104-.207.052-.39-.026-.547-.078-.156-.681-1.64-.933-2.247-.246-.593-.497-.512-.681-.52-.176-.008-.378-.01-.58-.01-.202 0-.531.076-.809.378-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.238 3.131.15.2 2.138 3.264 5.18 4.58.723.312 1.288.499 1.729.639.727.23 1.39.198 1.912.12.582-.087 1.854-.759 2.115-1.456.26-.697.26-1.296.183-1.422-.078-.126-.28-.2-.594-.356z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/results" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Results
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/packages" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Packages
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Blog Articles
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/tools" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  SEO Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/services/local-seo-multan" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Local SEO Multan
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/gmb-optimization" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  GMB Optimization
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/seo-audit" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Free SEO Audits
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.3s" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>Contact Info</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "12px", color: "rgba(255,255,255,0.7)", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Phone size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} /> <a href="tel:+923196902479" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>+92 319 6902479</a>
              </li>
              <li style={{ marginBottom: "12px", color: "rgba(255,255,255,0.7)", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Mail size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} /> musk01615@gmail.com
              </li>
              <li style={{ marginBottom: "12px", color: "rgba(255,255,255,0.7)", display: "flex", gap: "10px", alignItems: "flex-start", lineHeight: "1.5" }}>
                <MapPin size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} /> Shop #8, Pracha Street, Chowk B.C.G., Gulzaib Colony, Multan, 60000, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ marginTop: "0", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
            &copy; 2026 AhmadSEO. All rights reserved. Professional SEO Expert in Multan.
          </p>
        </div>
      </div>
    </footer>
  );
}
