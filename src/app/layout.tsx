import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/common/CookieConsent/CookieConsent";
import { ThemeProvider } from "@/context/ThemeContext";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://getservicedone.com'),
  title: "Get Service Done | Electrical, Plumbing & Handyman Services",
  description: "Expert home services across Metro Atlanta & GA. We provide certified electrical, plumbing, appliance repair, and handyman solutions. Book an expert today!",
  keywords: [
    'home services', 'electrical services', 'plumbing', 'handyman',
    'appliance repair', 'Buford', 'Sugar Hill', 'Suwanee', 'Lawrenceville', 'Duluth', 'Norcross', 'Cumming', 'Forsyth County', 'Alpharetta', 'Johns Creek', 'Milton', 'Roswell', 'Sandy Springs', 'Dunwoody', 'Cobb County', 'Smyrna', 'Marietta', 'East Cobb', 'EV charger installation', 'EV charger',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Get Service Done Inc',
    title: 'Get Service Done | Electrical, Plumbing & Handyman Services',
    description: 'Expert home services across Metro Atlanta & GA. Certified electrical, plumbing, appliance repair, and handyman solutions.',
    images: [
      {
        url: '/hero-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Get Service Done — Professional Home Services in Metro Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Service Done | Electrical, Plumbing & Handyman Services',
    description: 'Expert home services across Metro Atlanta & GA. Certified electrical, plumbing, appliance repair, and handyman solutions.',
    images: ['/hero-image.jpeg'],
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "name": "Get Service Done",
              "image": "https://getservicedone.com/logo.svg",
              "url": "https://getservicedone.com",
              "telephone": "+14703478788",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "702 Old Peachtree Rd NW, Suite 200",
                "addressLocality": "Suwanee",
                "addressRegion": "GA",
                "postalCode": "30024",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0515,
                "longitude": -84.0710
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "email": "info@getservicedone.com",
              "priceRange": "$$",
              "sameAs": [],
              "areaServed": ["Suwanee", "Johns Creek", "Duluth", "Lawrenceville", "Buford", "Sugar Hill"],
              "serviceType": ["Electrical Services", "Appliance Repair", "Handyman Services", "EV Charger Installation"]
            })
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-PNNWC2KP" />
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