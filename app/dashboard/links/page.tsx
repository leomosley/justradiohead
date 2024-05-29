import LinkList from "@/site/LinkList";
import getLinks from "@/utils/getLinks";

export default async function Page() {
  const links = await getLinks();

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-neutral-200 text-4xl font-bold tracking-tight mb-2">Links</h1>
      <LinkList links={links} />
    </div>
  );
}
