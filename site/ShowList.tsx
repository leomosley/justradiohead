import AddShowItem from '@/components/AddShowItem';
import ShowItem from '@/components/ShowItem';
import orderByDate from '@/utils/orderByDate';
import getShows from '@/utils/shows/getShows';
import clsx from 'clsx';
import React from 'react';

export default async function ShowList({
  className,
  showPast=false
} : {
  className?: string;
  showPast?: boolean; 
}) {
  const data = await getShows();
  const shows = orderByDate(data ?? [], showPast);

  return (
    <div className={clsx(
      "flex flex-col gap-1",
      className
    )}>
      {shows && shows.map((show, index) => (
        <ShowItem key={show.id} show={show} />
      ))}
      <AddShowItem />
    </div>
  );
}
