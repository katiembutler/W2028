import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Pinyon_Script } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
import { Cormorant_SC } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

// 1. Import your new PetalEffect component
// (Adjust this path if you saved it somewhere other than the components folder!)
import PetalEffect from "@/components/PetalEffect"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon', 
});

const c_g = Cormorant_Garamond({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-C_G', 
});

const c_sc = Cormorant_SC({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-C_SC', 
});

export const metadata: Metadata = {
  title: "Our Wedding", // I updated this from "Create Next App" for you!
  description: "Join us to celebrate our special day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 2. BUG FIX: Added your custom font variables here so Tailwind can use them!
      className={`${geistSans.variable} ${geistMono.variable} ${pinyon.variable} ${c_g.variable} ${c_sc.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 3. Add the Petal Effect right at the top of your body */}
        <PetalEffect />
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}