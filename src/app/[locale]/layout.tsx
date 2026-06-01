import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "../globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/common/CookieConsent/CookieConsent";
import { ThemeProvider } from "@/context/ThemeContext";
import { GoogleTagManager } from "@next/third-parties/google";
import { getTranslations } from 'next-intl/server';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.layout' });

  return {
    metadataBase: new URL('https://getservicedone.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        es: '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      url: '/',
      siteName: t('openGraph_siteName'),
      title: t('title'),
      description: t('description'),
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
      title: t('title'),
      description: t('description'),
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
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Providing all messages to the client side
  const { NextIntlClientProvider } = await import('next-intl');
  const { getMessages } = await import('next-intl/server');
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'Metadata.layout' });

  return (
    <html lang={locale} suppressHydrationWarning>
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
              "serviceType": [t('schema_serviceType_1'), t('schema_serviceType_2'), t('schema_serviceType_3'), t('schema_serviceType_4')]
            })
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-PNNWC2KP" />
      <body className={poppins.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}