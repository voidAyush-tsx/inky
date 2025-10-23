import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inky - Where Storytelling Comes Alive",
  description: "Publishing, design, and multimedia solutions for creators want to leave a mark",
  openGraph: {
    title: "Inky - Where Storytelling Comes Alive",
    description: "Publishing, design, and multimedia solutions for creators want to leave a mark",
    images: ["/og"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inky - Where Storytelling Comes Alive",
    description: "Publishing, design, and multimedia solutions for creators want to leave a mark",
    images: ["/og"],
  },
  themeColor: "#0B1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
