import Link from "next/link";
import { HiPlus } from "react-icons/hi";

export default function AddImageItem() {
  return (
    <Link
      className="flex group w-32 h-56 justify-center items-center bg-neutral-900"
      href="/dashboard/gallery/images/add"
    >
      <HiPlus className="w-16 h-16 p-2 font-thin text-neutral-800 group-hover:text-neutral-100 transition duration-150" />
    </Link>
  );
}
