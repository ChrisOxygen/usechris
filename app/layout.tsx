import type { Metadata } from "next";
import {
  Russo_One,
  Squada_One,
  Revalia,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
});

const squadaOne = Squada_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-squada-one",
});

const revalia = Revalia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-revalia",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usechris.dev"),
  title: {
    default: "Chris Okafor — Full-Stack Developer",
    template: "%s | Chris Okafor",
  },
  description:
    "Freelance Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase. I build production-ready MVPs and AI-integrated apps for startups.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Frontend Developer",
    "MVP Development",
    "AI Integration",
    "Freelance Developer",
    "Nigeria Developer",
  ],
  authors: [{ name: "Chris Okafor", url: "https://usechris.dev" }],
  creator: "Chris Okafor",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usechris.dev",
    title: "Chris Okafor — Full-Stack Developer",
    description:
      "Freelance Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase. I build production-ready MVPs and AI-integrated apps for startups.",
    siteName: "Chris Okafor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chris Okafor — Full-Stack Developer portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Okafor — Full-Stack Developer",
    description:
      "Freelance Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase. I build production-ready MVPs and AI-integrated apps for startups.",
    images: ["/og-image.png"],
    creator: "@chris_okafor_x",
    site: "@chris_okafor_x",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${russoOne.variable} ${squadaOne.variable} ${revalia.variable} ${sourceCodePro.variable} antialiased`}
      >
        <PHProvider>{children}</PHProvider>
      </body>
    </html>
  );
}
