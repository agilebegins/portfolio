import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const bebasNeue = localFont({
  src: [
    {
      path: "./fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-bebasNeue",
});
export const pally = localFont({
  src: [
    {
      path: "./fonts/Pally-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const frederick = localFont({
  src: [
    {
      path: "./fonts/FrederickatheGreat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-frederick",
});

export const tasa = localFont({
  src: [
    {
      path: "./fonts/TASAExplorer-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-tasa",
});

export const zendots = localFont({
  src: [
    {
      path: "./fonts/ZenDots-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-zendots",
});

export const metadata: Metadata = {
  title: "Agile Begins - Design. Develop. Scale.",
  description: "Agile Begins is a web development agency that specializes in creating stunning and functional websites. We are passionate about helping businesses establish a strong online presence and achieve their goals through innovative design and cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${pally.className} ${frederick.variable} ${tasa.variable} ${zendots.variable} antialiased`}>
        <CustomCursor />
        <Header />
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
