import LogoutButton from "@/site/LogoutButton";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-neutral-200 text-4xl font-bold tracking-tight mb-2">Logout</h1>
      <span className="text-neutral-300 mb-4 sm:text-lg">Are you sure you want to logout?</span>
      <div className="flex gap-4">
        <Link
          className="flex bg-neutral-800 flex-1 px-8 py-2 rounded justify-center"
          href="/dashboard"
        >
          <span className="text-neutral-200 text-lg font-bold">Cancel</span>
        </Link>
        <LogoutButton className="rounded" />
      </div>
    </div>
  );
}
