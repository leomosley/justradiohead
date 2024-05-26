import { CollectionModel } from "@/types";

export default async function getCollection(id: string) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.VERCEL_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/collections/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as CollectionModel;
  } catch (error) {
    console.error('Error fetching collection:', error);
    return [];
  }
}
