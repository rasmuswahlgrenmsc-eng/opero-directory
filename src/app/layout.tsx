import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OPERO / Selected Works",
  description: "A curated minimalist showcase of 5 custom-designed cleaning business websites built with Next.js, TailwindCSS, and Framer Motion.",
  keywords: ["design portfolio", "minimalist portfolio", "web development", "nextjs portfolio", "uiux showcase"],
  icons: {
    icon: "/assets/opero-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
