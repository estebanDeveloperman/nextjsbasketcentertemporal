import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css"; // Mueve globals.css a /styles
import { Montserrat } from "next/font/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import WhatsAppFloat from "@/components/utils/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define una variable CSS
  weight: ["400", "600", "700"], // Solo los pesos necesarios
  display: "swap", // Mejora la carga
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clubbasketcenter.com"), // Define la URL base
  title: "Basket Center - Escuela de Básquet en Perú",
  description:
    "Únete a Basket Center, la mejor escuela de básquet en Perú. Entrenamiento profesional para todas las edades.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Basket Center - Escuela de Básquet en Perú",
    description: "Únete a Basket Center, la mejor escuela de básquet en Perú.",
    url: "https://clubbasketcenter.com",
    siteName: "Basket Center",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Basket Center - Escuela de Básquet en Perú",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basket Center - Escuela de Básquet en Perú",
    description: "Únete a Basket Center, la mejor escuela de básquet en Perú.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "Basket Center",
              url: "https://clubbasketcenter.com",
              description: "Escuela de básquet en Perú para todas las edades.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Principal 123",
                addressLocality: "Lima",
                addressCountry: "PE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 999 999 999",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/BasketCenter",
                "https://www.instagram.com/BasketCenter",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-montserrat bg-white antialiased`}
      >
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
