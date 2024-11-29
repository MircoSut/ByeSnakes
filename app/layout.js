import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ByeSnakes",
  description: "Easily know who is not following you back on instagram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Metadata */}
        <meta name="title" content="ByeSnakes" />
        <meta
          name="description"
          content="Easily know who is not following you back on Instagram"
        />

        {/* Open Graph Meta Tags (for better sharing previews) */}
        <meta property="og:title" content="ByeSnakes" />
        <meta
          property="og:description"
          content="Easily know who is not following you back on Instagram"
        />
        <meta property="og:image" content="/logo_2.png" />
        <meta property="og:url" content="https://www.byesnakes.xyz" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
