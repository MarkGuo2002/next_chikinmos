"use client";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import BgDecorations from "./components/BgDecorations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head></head>
      <body className={`${inria.className} flex flex-col min-h-screen relative overflow-x-hidden`}>
        <BgDecorations />

        <Navbar />
        
        <div className="main-container z-10 py-24 px-4 flex-grow flex justify-center">
          {children}
          <Analytics />
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
