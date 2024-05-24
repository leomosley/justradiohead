import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Just Radiohead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex mx-auto md:max-w-5xl">
      {children}
    </main>
  );
}
