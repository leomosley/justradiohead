import AddShowItem from '@/components/AddShowItem';
import ShowItem from '@/components/ShowItem';
import getShows from '@/utils/shows/getShows';
import clsx from 'clsx';
import React from 'react';

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

const currentDate = new Date();

export default async function ShowList({
  className,
  showPast=false
} : {
  className?: string;
  showPast?: boolean; 
}) {
  const data = await getShows();
  const filtered = !showPast
    ? data
      .filter(item => {
        const itemDate = parseDate(item.date);
        return itemDate >= currentDate;
      })
    : data;
  const shows = data
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });

  return (
    <div className={clsx(
      "flex flex-col gap-1",
      className
    )}>
      {shows.map((show, index) => (
        <ShowItem key={show.id} show={show} />
      ))}
      <AddShowItem />
    </div>
  );
}
