import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/common/CookieConsent/CookieConsent";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Get Service Done | Electrical, Plumbing & Handyman Services",
  description: "Expert home services across Metro Atlanta & GA. We provide certified electrical, plumbing, appliance repair, and handyman solutions. Book an expert today!",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}