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
  description: "Building scalable and innovative web solutions.",
  openGraph: {
    title: "Inky - Where Storytelling Comes Alive",
    description: "Building scalable and innovative web solutions.",
    siteName: "Inky",
    // url: "your site url here",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", //change this to your domain after hosting website
        width: 1200,
        height: 630,
        alt: "Inky - Where Storytelling Comes Alive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inky - Where Storytelling Comes Alive",
    description: "Publishing, design, and multimedia solutions for creators want to leave a mark",
    images: ["https://yourdomain.com/og-image.png"], //change this to your domain after hosting website
  },
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
