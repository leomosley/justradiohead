import Link from "next/link";
import { HiQuestionMarkCircle } from "react-icons/hi";

export default function DashboardHeader() {
  return (
    <header className="flex items-center p-4 gap-4 sticky bg-neutral-950 top-0 h-18 z-50">
      <Link
        className="flex items-center gap-4"
        href="/"
      >
        <div className="w-16 h-16 rounded-full bg-white"></div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="text-red-600">JUST&nbsp;</span>
          <span className="text-neutral-100">RADIOHEAD</span>
        </h1>
      </Link>
      {/* Help (contact details, guide, etc, markdown docs?) */}
      <div className="flex gap-1 items-center ml-auto text-neutral-500">
        <HiQuestionMarkCircle className=""/>
        <span className="text-sm hidden sm:block pr-10">Help</span>
      </div>
    </header>
  );
}
