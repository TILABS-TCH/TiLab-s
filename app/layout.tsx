import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/content";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tilabs.dev"),
  title: {
    default: `${siteConfig.fullName} (${siteConfig.brandName}) | ${siteConfig.role}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.positioning,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "UI UX Developer",
    "Web Applications",
    "TILABS",
    "Ogunpitan Oluwatimileyin Samuel",
    "Timi Portfolio",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.github }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tilabs.dev",
    title: `${siteConfig.fullName} (${siteConfig.brandName}) | ${siteConfig.role}`,
    description: siteConfig.positioning,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/images/profile/avatar.svg",
        width: 600,
        height: 600,
        alt: `${siteConfig.brandName} - ${siteConfig.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | ${siteConfig.role}`,
    description: siteConfig.positioning,
    creator: "@tilabs_dev",
    images: ["/images/profile/avatar.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-bg-main text-text-main antialiased selection:bg-accent selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
