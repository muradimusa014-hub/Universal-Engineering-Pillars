import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <--- ADD THIS IMPORT
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.companyName} | Heavy Engineering & Infrastructure`,
  description: siteConfig.about.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* <--- PLUG THE FOOTER BACK IN HERE */}
      </body>
    </html>
  );
}