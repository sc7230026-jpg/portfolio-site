"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Results", path: "/results" },
    { name: "Packages", path: "/packages" },
    { name: "Tools", path: "/tools" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          Ahmad<span>SEO</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="tel:03196902479" className="btn btn-outline" style={{ padding: "12px 24px" }}>
            Call Now
          </a>
          <Link href="/#contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
            Book Consultation
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-nav-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "90px",
            left: "0",
            width: "100%",
            background: "rgba(10, 10, 10, 0.98)",
            backdropFilter: "blur(15px)",
            padding: "40px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center",
            gap: "25px",
            zIndex: "999",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                color: pathname === link.path ? "var(--primary)" : "rgba(255,255,255,0.8)",
                fontSize: "1.2rem",
                fontWeight: "600",
                transition: "0.3s",
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
            <a
              href="tel:03196902479"
              className="btn btn-outline"
              style={{ justifyContent: "center", color: "white", borderColor: "white" }}
              onClick={closeMenu}
            >
              Call Now
            </a>
            <Link
              href="/#contact"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              onClick={closeMenu}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
