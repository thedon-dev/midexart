import type { Metadata } from "next";
import { Inter, Open_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Midex Art | Premium Interior Design Services",
  description:
    "Transform your spaces with Midex Art's expert interior design services. Luxury residential & commercial designs tailored to your vision.",
  keywords: [
    "interior design",
    "home decor",
    "luxury interiors",
    "space planning",
    "commercial design",
  ],
  openGraph: {
    title: "Midex Art | Premium Interior Design Services",
    description:
      "Professional interior design solutions for homes and businesses",
    url: "https://midexart.com",
    siteName: "Midex Art",
    images: [
      {
        url: "https://midexart.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midex Art | Premium Interior Design Services",
    description:
      "Professional interior design solutions for homes and businesses",
    images: ["https://midexart.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
