import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/FOOTER";
import ScrollProgress from "../components/SCROOLPROGESS";
import AnimatedBackground from "../components/AMIME";

export const metadata: Metadata = {
  title: "Joyce Gracy | Portfolio",
  description: "Aspiring AI Engineer & Future Tech Entrepreneur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
