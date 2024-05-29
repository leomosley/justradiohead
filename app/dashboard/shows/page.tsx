import ShowList from "@/site/ShowList";

export default function Page() {
  return (
    <div className="text-white">
      <h1 className="text-neutral-200 text-4xl font-bold tracking-tight mb-2">Shows</h1>
      <ShowList />
    </div>
  );
}
