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
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
