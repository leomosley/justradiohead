import type { Metadata } from "next";
import DashboardMenu from "@/site/DashboardMenu";
import DashboardHeader from "@/site/DashboardHeader";

export const metadata: Metadata = {
  title: "Dashboard | Just Radiohead",
  icons: [
    { url: "../icon.png"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col mx-auto md:max-w-6xl">
      <DashboardHeader />
      <section className="flex flex-col sm:flex-row">
        <DashboardMenu />
        <section className="flex w-full p-4 sm:p-6">
          {children}
        </section>
      </section>
    </main>
  );
}
