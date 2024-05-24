import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterClient from "@/toast/ToasterClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Just Radiohead",
  icons: [
    { url: "icon.png"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToasterClient />
      </body>
    </html>
  );
}
