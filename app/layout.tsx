import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C-ENT",
  description: "採用支援・Webデザイン・スクール運営を通じてビジネスの未来を共に創造します。",
  icons: {
    icon: "/c-ent.ico",
  },
  openGraph: {
    title: "C-ENT",
    description:
      "採用支援・Webデザイン・スクール運営を通じてビジネスの未来を共に創造します。",
    url: "https://www.c-ent.jp",
    siteName: "C-ENT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "C-ENT Webサイト",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer
          company={{
            name: "C-ENT Inc.",
            legalName: "株式会社 シーエント",
            address1: "〒450-0002",
            address2: "愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401",
            phone: "09017241090",
            email: "info@c-ent.jp",
          }}
          nav={[
            {
              title: "企業情報",
              items: [
                { href: "/about", label: "会社概要" },
                { href: "/about#message", label: "トップメッセージ" },
                { href: "/about#access", label: "アクセス" },
              ],
            },
            {
              title: "サポート",
              items: [
                { href: "/contact", label: "お問い合わせ" },
                { href: "/faq", label: "FAQ" },
                { href: "/recruit", label: "採用情報" },
              ],
            },
          ]}
        />
      </body>
    </html>
  );
}
