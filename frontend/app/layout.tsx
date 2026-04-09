import type { Metadata, Viewport } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pitmarket — Menú Digital",
  description: "Conoce el menú de Pitmarket: platos frescos, bowls y sandwiches. Escanea el QR o visita nuestra carta digital.",
  keywords: ["Pitmarket", "menú", "carta digital", "bowls", "sandwiches", "platos frescos", "comida"],
  openGraph: {
    title: "Pitmarket — Menú Digital",
    description: "Carta digital de Pitmarket. Platos frescos, bowls y sandwiches.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins bg-background text-brand-black selection:bg-brand-gold selection:text-white">
        <div className="flex-1 w-full min-h-screen lg:min-h-0 relative">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
