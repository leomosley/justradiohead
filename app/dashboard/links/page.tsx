import AddLinkItem from "@/components/AddLinkItem";
import LinkList from "@/site/LinkList";

export default async function Page() {

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-neutral-200 text-4xl font-bold tracking-tight mb-2">Links</h1>
      <LinkList />
      <AddLinkItem />
    </div>
  );
}
