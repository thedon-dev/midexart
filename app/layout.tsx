import type { Metadata } from "next";
import { Inter, Open_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

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
    "Midex Art specializes in professional painting services, POP ceiling installations, wall screeding, and interior finishing for homes and offices. Quality craftsmanship guaranteed.",
  keywords: [
    "interior design",
    "painting services",
    "POP ceiling installations",
    "wall screeding",
    "interior finishing",
    "home decor",
    "luxury interiors",
    "space planning",
    "commercial design",
  ],
  openGraph: {
    title: "Midex Art | Premium Interior Design Services",
    description:
      "Professional interior design solutions for homes and businesses",
    url: "https://midexart.art",
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
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-out",
  //     once: true,
  //     offset: 120,
  //     delay: 100,
  //   });
  // }, []);

  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
