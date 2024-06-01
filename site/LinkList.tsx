import LinkItem from '@/components/LinkItem';
import getLinks from '@/utils/links/getLinks';

export default async function LinkList() {
  const links = await getLinks();
  return (
    <div className="flex flex-col">
      {links && links.map((link, index) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
}
