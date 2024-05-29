import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterClient from "@/toast/ToasterClient";
import AuthProvider from "@/site/AuthProvider";
import AdminPanel from "@/site/AdminPanel";
import AppStateProvider from "@/state/AppStateProvider";

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
    <AuthProvider>
      <AppStateProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <AdminPanel />
            <ToasterClient />
          </body>
        </html>
      </AppStateProvider>
    </AuthProvider>
  );
}
