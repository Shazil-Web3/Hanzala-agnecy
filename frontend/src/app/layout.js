import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import GlobalReviewForm from "@/components/GlobalReviewForm";
import FbqRouter from "./FbqRouter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hanzwell Agency - Digital Marketing & Website Creation",
  description: "Professional digital marketing and website creation services. Grow your business with our expert team and proven strategies.",
  keywords: "digital marketing, website creation, Google Ads, Meta Ads, TikTok Ads, YouTube Ads, business growth",
  openGraph: {
    title: "Hanzwell Agency - Digital Marketing & Website Creation",
    description: "Professional digital marketing and website creation services. Grow your business with our expert team and proven strategies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '754517627496431');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Meta Pixel Noscript */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=754517627496431&ev=PageView&noscript=1"
            alt="" 
          />
        </noscript>
        <FbqRouter />
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <GlobalReviewForm />
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
