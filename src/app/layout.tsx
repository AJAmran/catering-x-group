import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const viewport: Viewport = {
  themeColor: '#1e3a66',
  width: 'device-width',
  initialScale: 1,
};

// Professional sans-serif for body and UI elements
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://x-group-catering.com'),
  title: {
    default: "X-Group Catering & Convention | Premier Event Services in Dhaka",
    template: "%s | X-Group Catering & Convention"
  },
  description: "Dhaka's premier catering & convention services since 1992. Exclusive venues and culinary excellence for weddings, corporate events, and social gatherings.",
  authors: [{ name: "X-Group Catering" }],
  creator: "X-Group Catering",
  publisher: "X-Group Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "X-Group Catering & Convention | Curating Memories Since 1992",
    description: "Dhaka's premier catering & convention services. Architectural elegance meets culinary artistry.",
    url: 'https://x-group-catering.com',
    siteName: 'X-Group Catering',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/catering-logo.png',
        width: 800,
        height: 600,
        alt: 'X-Group Catering & Convention',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-Group Catering & Convention',
    description: "Dhaka's premier catering & convention services since 1992.",
    images: ['/catering-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://x-group-catering.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'hospitality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col font-sans text-neutral-900 bg-neutral-100 selection:bg-convention/20 selection:text-convention-dark`}
      >
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
