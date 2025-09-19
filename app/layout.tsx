import type { Metadata } from "next";
import "./globals.css";


import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Portfolio - Yuuri",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 font-sans antialiased">
        <Navbar />
        <main>
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
