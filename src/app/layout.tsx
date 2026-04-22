import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, Syncopate } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import WebGLBackground from "@/components/WebGLBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tahir Hussain — Creative Director",
  description: "Award-winning creative director specializing in immersive digital experiences and bold visual identities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceGrotesk.variable} ${syncopate.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-clip font-sans selection:bg-accent selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          <WebGLBackground />
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
