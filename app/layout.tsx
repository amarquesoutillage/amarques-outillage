import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "A.Marques Outillage | Découpage, Emboutissage et Tôlerie Industrielle",
  description:
    "Entreprise spécialisée dans le découpage, l'emboutissage et la tôlerie industrielle en Seine-et-Marne. Fabrication de pièces métalliques techniques et glissières d'assemblage pour sommiers et têtes de lit.",

  keywords: [
    "découpage industriel",
    "emboutissage",
    "tôlerie industrielle",
    "pièces métalliques",
    "sous-traitance industrielle",
    "glissières d'assemblage",
    "fabrication métallique",
    "Chelles",
    "Seine-et-Marne",
    "ferroviaire",
    "médical",
    "aéronautique",
  ],

  authors: [{ name: "A.Marques Outillage" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
