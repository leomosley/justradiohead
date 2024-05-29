import Link from "next/link";

export default function AddImageItem() {
  return (
    <div className="w-24 h-44 bg-white">
      <Link
        className=""
        href="/dashboard/gallery/images/add"
      >
        <span>Add image</span>
      </Link>
    </div>
  );
}
