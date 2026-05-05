import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RescueKitchen",
  description: "RescueKitchen provides best solution to fight food waste.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "0px" }}>{children}</main>
        <Footer />
        
        {/* Razorpay Script */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        
        {/* Botpress Script */}
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js" defer></script>
        <script src="https://mediafiles.botpress.cloud/1fbb9cd4-fe16-4e09-88b8-836fd7e63b34/webchat/config.js" defer></script>
      </body>
    </html>
  );
}
