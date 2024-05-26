import ShowItem from '@/components/ShowItem';
import getShows from '@/utils/getShows';
import React from 'react';

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

const currentDate = new Date();

export default async function ShowList() {
  const shows = await getShows();
  const sorted = shows
    .filter(item => {
      const itemDate = parseDate(item.date);
      return itemDate >= currentDate;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });

  return (
    <div className="flex flex-col gap-1 overflow-y-auto overflow-x-hidden max-h-half hide-scrollbar">
      {sorted.map((show, index) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </div>
  );
}
