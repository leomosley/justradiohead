import LogoutButton from "@/site/LogoutButton";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <span className="text-neutral-200 mb-2">Are you sure you want to logout?</span>
      <LogoutButton className="rounded w-fit" />
    </div>
  );
}
