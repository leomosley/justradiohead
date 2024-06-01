import { Show } from "@prisma/client";
import parseDate from "./parseDate";

const currentDate = new Date();

export default function orderByDate(data: Show[], showPast=false) {
  let filtered = !showPast 
    ? data.filter(item => {
    const itemDate = parseDate(item.date);
    return itemDate >= currentDate;
    })
    : data;
  return filtered.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateA.getTime() - dateB.getTime();
  })
}