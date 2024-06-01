import AddLinkItem from "@/components/AddLinkItem";
import LinkList from "@/site/LinkList";

export default async function Page() {

  return (
    <div className="flex flex-col w-full">
      <LinkList />
      <AddLinkItem />
    </div>
  );
}
