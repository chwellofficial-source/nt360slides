import type { Metadata } from "next";
import localFont from "next/font/local";
import { Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexteach360.com"),
  title: "NexTeach 360 - AI presentation generator",
  description:
    "Create your own slides and presentations with NexTeach 360 for your classes",
  keywords: [
    "AI presentation generator",
    "data storytelling",
    "data visualization tool",
    "AI data presentation",
    "presentation generator",
    "data to presentation",
    "interactive presentations",
    "professional slides",
  ],
  openGraph: {
    title: "NexTeach 360 - AI presentation generator",
    description:
      "Create stunning AI-powered presentations for your courses in seconds.",
    url: "https://nexteach360.com",
    siteName: "NexTeach 360",
    images: [
      {
        url: "https://static.wixstatic.com/media/cce196_42deac6b71f14423a1689280ca4af960~mv2.png",
        width: 1200,
        height: 630,
        alt: "NexTeach 360 Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://nexteach360.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexTeach 360 - AI presentation generator",
    description:
      "OCreate stunning AI-powered presentations for your courses in seconds.",
    images: ["https://static.wixstatic.com/media/cce196_018a3da4d6a94afab53048c33108bee9~mv2.png"],
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
        className={`${inter.variable} ${syne.variable} antialiased`}
      >
        <Providers>
          

            {children}

          
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
