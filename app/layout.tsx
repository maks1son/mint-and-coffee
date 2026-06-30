import type { Metadata } from "next";
import { Bree_Serif, Manrope, Oswald } from "next/font/google";
import "./globals.css";

const bree = Bree_Serif({
  variable: "--font-bree",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mint & Coffee - кофейня с мятным акцентом",
  description:
    "Авторский кофе с мятой, айс-кофе, латте и напитки с собой. Светлый кофейный лендинг Mint & Coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${bree.variable} ${manrope.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
