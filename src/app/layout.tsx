import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Kiwi_Maru } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const kiwiMaru = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Inky - Where Storytelling Comes Alive",
  description: "Building scalable and innovative web solutions.",
  openGraph: {
    title: "Inky - Where Storytelling Comes Alive",
    description: "Building scalable and innovative web solutions.",
    siteName: "Inky",
    url: "https://inky-roan.vercel.app/",
    images: [
      {
        url: "https://inky-roan.vercel.app/og-image.png",
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
    images: ["https://inky-roan.vercel.app/og-image.png"],
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
        className={`${inter.variable} ${libreBaskerville.variable} ${kiwiMaru.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
