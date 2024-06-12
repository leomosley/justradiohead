export default function getRandomArrayItems(array: any[], n: number) {
  if (array.length < n) {
    throw new Error("Can't select more items than in array.");
  }

  const items: any[] = [];
  let i = 0;

  while (i < n) {
    let item = array[Math.floor(Math.random()*array.length)];
    if (!items.includes(item)) {
      items.push(item);
      i++;
    }
  }

  return items;
}
