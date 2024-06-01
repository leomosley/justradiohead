import LogoutButton from "@/site/LogoutButton";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
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
