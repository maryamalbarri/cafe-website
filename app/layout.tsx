import type { Metadata } from "next";
import { DM_Sans, Bodoni_Moda, Syne } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Café | Good Coffee. Better Days.",
  description: "Discover Café, a specialty coffee experience featuring handcrafted drinks, cozy moments, and good coffee for every day.",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bodoni.variable} ${syne.variable} h-full antialiased`}>
        <Cursor />
        {children}
        </body>
    </html>
  );
}
