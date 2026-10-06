import Link from "next/link";

export default function Logo({ variant = "header", onClick }) {
  const isFooter = variant === "footer";
  const primaryTextColor = isFooter ? "#FFFFFF" : "#003060";
  const accentColor = "#1060D0";
  const subTextColor = isFooter ? "rgba(255, 255, 255, 0.75)" : "#1060D0";

  return (
    <Link
      href="/"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        userSelect: "none",
      }}
      aria-label="Ahmad Local SEO Expert - Home"
    >
      {/* Professional Brand Mark SVG */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="40" height="40" rx="10" fill={isFooter ? "rgba(255,255,255,0.12)" : "#003060"} />
        {/* Subtle Map Pin / Search / Chart combination */}
        <path
          d="M20 9C15.58 9 12 12.58 12 17C12 22.25 20 31 20 31C20 31 28 22.25 28 17C28 12.58 24.42 9 20 9Z"
          fill={accentColor}
          opacity="0.9"
        />
        {/* Inner Search Glass / Center dot */}
        <circle cx="20" cy="16.5" r="4.5" fill="#FFFFFF" />
        {/* Growth Bar Chart inside pin center */}
        <path
          d="M18 18V16M20 18V14M22 18V15"
          stroke="#003060"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.25rem",
            fontWeight: "800",
            color: primaryTextColor,
            letterSpacing: "-0.3px",
          }}
        >
          Ahmad
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            fontWeight: "700",
            color: subTextColor,
            letterSpacing: "0.8px",
            textTransform: "uppercase",
          }}
        >
          Local SEO Expert
        </span>
      </div>
    </Link>
  );
}
