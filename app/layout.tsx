import type { Metadata } from "next";
import {
  Russo_One,
  Squada_One,
  Revalia,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Chris Okafor - Full-Stack Developer | Next.js & React Specialist",
    template: "%s | Chris Okafor - Full-Stack Developer",
  },
  description:
    "Freelance Full-Stack Developer with 3+ years of experience specializing in Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and MongoDB. Building production-ready MVPs and AI-integrated applications for startups and businesses.",
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
    "Software Engineer",
    "MVP Development",
    "AI Integration",
    "Freelance Developer",
    "Port Harcourt Developer",
    "Nigeria Developer",
  ],
  authors: [{ name: "Chris Okafor" }],
  creator: "Chris Okafor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usechris.dev", // Replace with your actual domain
    title: "Chris Okafor - Full-Stack Developer | Next.js & React Specialist",
    description:
      "Freelance Full-Stack Developer with 3+ years of experience specializing in Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and MongoDB. Building production-ready MVPs and AI-integrated applications.",
    siteName: "Chris Okafor Portfolio",
    images: [
      {
        url: "/og-image.png", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Chris Okafor - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Okafor - Full-Stack Developer | Next.js & React Specialist",
    description:
      "Freelance Full-Stack Developer with 3+ years of experience. Specializing in Next.js, React, TypeScript, PostgreSQL & MongoDB.",
    images: ["/og-image.png"], // Add your Twitter card image
    creator: "@chris_okafor_x", // Add your Twitter handle if you have one
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
  verification: {
    // google: "your-google-verification-code", // Add after setting up Google Search Console
  },
  other: {
    "linkedin:profile":
      "https://www.linkedin.com/in/christopher-okafor-17084416b", // Replace with your LinkedIn profile URL
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
        {children}
      </body>
    </html>
  );
}
