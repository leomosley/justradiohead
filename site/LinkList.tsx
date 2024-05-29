import LinkItem from '@/components/LinkItem';
import { Links } from '@prisma/client';

export default function LinkList({
  links
} : {
  links: Links[];
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2 border-b border-neutral-600 gap-2 text-neutral-200">
        <span className="">Text</span>
        <span className="">URL</span>
        <div className="w-12"></div>
      </div>
      {links.map((link, index) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
}
