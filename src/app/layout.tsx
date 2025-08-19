import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../css/index.css'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/siteData";
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="custom" lang="en" style={{
      scrollBehavior: 'smooth'
    }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} `}>
        <div className="flex flex-col justify-between font-sans underline-offset-4">
          <Header />
          <main className="mb-auto h-full">
            {children}
            <Analytics />
            <GoogleAnalytics gaId="G-J3C3L95REK" />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
