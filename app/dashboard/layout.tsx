import type { Metadata } from "next";
import DashboardMenu from "@/site/DashboardMenu";
import DashboardHeader from "@/site/DashboardHeader";
import DashboardTitle from "@/site/DashboardTitle";

export const metadata: Metadata = {
  title: "Dashboard | Just Radiohead",
  icons: [
    { url: "https://justradiohead.vercel.app/icon.png"}
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
        <section className="flex flex-col w-full p-4 sm:p-6">
          <DashboardTitle />
          {children}
        </section>
      </section>
    </main>
  );
}
