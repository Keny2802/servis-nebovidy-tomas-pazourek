import type {
    Metadata
} from "next";
import {
    Geist,
    Geist_Mono,
    Kanit
} from "next/font/google";
import "./globals.css";

import News from "./components/News";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const fontKanit = Kanit({
  variable: "--font-kanit",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"]
});

export const metadata: Metadata = {
    metadataBase: "https://www.servis-nebovidy.cz",
    title: "Servis Nebovidy Japanese Cars - autoservis se zaměřením na Japonské vozy",
    description: "Servis Nebovidy se primárně zaměřuje na opravy a servis Japonských vozů.",
    keywords: [
      "nebovidy",
      "tomáš pazourek",
      "servis nebovidy japanese cars",
      "japenese cars",
      "autoservis nebovidy",
      "přezutí kol",
      "výměna brzdové kapaliny",
      "výměna brzdové a spojkové kapaliny",
      "chladící kapalina g11",
      "chladící kapalina g12",
    ],
    icons: [
      {
        url: "/logo.avif",
        type: "image/avif"
      }
    ],
    openGraph: {
        title: "Servis Nebovidy Japanese Cars - autoservis se zaměřením na Japonské vozy",
        description: "Servis Nebovidy se primárně zaměřuje na opravy a servis Japonských vozů.",
        images: [
            {
                width: 630,
                height: 1200,
                url: "/hero.avif",
                type: "image/avif"
            }
        ]
    },
    robots: {
      index: true,
      follow: true,
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${fontKanit} antialiased`}
      >
        {children}
        <News />
      </body>
    </html>
  );
}
