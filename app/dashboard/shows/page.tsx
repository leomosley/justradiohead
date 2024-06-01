import ShowList from "@/site/ShowList";

export default function Page() {
  return (
    <div className="w-full text-neutral-200">
      <ShowList showPast={false} />
    </div>
  );
}
