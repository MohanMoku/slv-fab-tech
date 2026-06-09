// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { Belanosima, DM_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Belanosima({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
});

const fontSerif = DM_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400"
});

export const metadata = {
  title: "SLV Fab Tech - Precision Sheet Metal Fabrication | Bengaluru",
  description:
    "SLV Fab Tech is an ISO 9001:2015 certified sheet metal fabrication company in Bengaluru. Specializing in laser cutting, CNC bending, TIG/MIG welding, riveting, and complete assembly for electrical, automation, and packaging industries.",
  keywords:
    "SLV Fab Tech, sheet metal fabrication Bengaluru, laser cutting Bengaluru, CNC bending, TIG welding, MIG welding, sheet metal company Peenya, ISO certified fabrication, sheet metal Hegganahalli, industrial fabrication Bengaluru",
  authors: [{ name: "SLV Fab Tech" }],
  creator: "SLV Fab Tech",
  publisher: "SLV Fab Tech",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://slv-fab-tech.vercel.app",
    siteName: "SLV Fab Tech",
    title: "SLV Fab Tech - Precision Sheet Metal Fabrication | Bengaluru",
    description:
      "ISO 9001:2015 certified sheet metal fabrication in Bengaluru. Laser cutting, CNC bending, TIG/MIG welding, riveting, and full assembly — all under one roof.",
    images: [
      {
        url: "https://slv-fab-tech.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SLV Fab Tech - Sheet Metal Fabrication Bengaluru"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SLV Fab Tech - Precision Sheet Metal Fabrication | Bengaluru",
    description:
      "ISO 9001:2015 certified fabrication company in Bengaluru. Laser cutting, bending, welding & assembly services for industrial applications."
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased p-4 h-dvh overflow-x-hidden mt-26`}>
        {children}
        <ScrollProgress className="h-1.5" />
        <Toaster />
      </body>
    </html>
  );
}