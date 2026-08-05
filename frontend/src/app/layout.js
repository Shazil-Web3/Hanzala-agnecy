import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/LenisProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import GlobalReviewForm from "../components/GlobalReviewForm";

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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PL32Q27L');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PL32Q27L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
