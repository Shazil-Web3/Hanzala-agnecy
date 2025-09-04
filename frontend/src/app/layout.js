import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wise Formation - LLC Formation, Website Creation & Marketing",
  description: "Professional LLC formation, website creation, and digital marketing services. Grow your business with our expert team.",
  keywords: "LLC formation, website creation, digital marketing, business formation, web design",
  openGraph: {
    title: "Wise Formation - LLC Formation, Website Creation & Marketing",
    description: "Professional LLC formation, website creation, and digital marketing services. Grow your business with our expert team.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1a1a1a',
                color: '#f5f5f5',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </LenisProvider>
      </body>
    </html>
  );
}
