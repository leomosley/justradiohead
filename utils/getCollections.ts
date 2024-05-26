import { CollectionModel } from "@/types";

export default async function getCollections(limit?: number) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/collections`, {
      method: 'GET',
      cache: 'no-store'
    });


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json() as CollectionModel[];
    return limit 
      ? data.slice(0, limit)
      : data;

  } catch (error) {
    console.error('Error fetching collection:', error);
    return [];
  }
}
