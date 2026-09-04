import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata = {
  title: "Ahmad Local SEO Expert | Premium SEO Agency",
  description: "Ahmad Local SEO Expert - Premium SEO services to help your business dominate local search results and drive more leads.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Ahmad Local SEO Expert",
    "url": "https://ahmad-seo-pro.vercel.app/",
    "telephone": "+92 319 6902479",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop #8, Pracha Street, Chowk B.C.G., Gulzaib Colony",
      "addressLocality": "Multan",
      "postalCode": "60000",
      "addressCountry": "Pakistan"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "19:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
