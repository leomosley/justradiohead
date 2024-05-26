import { LinksModel } from "@/types";

export default async function getLinks(limit?: number) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.VERCEL_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/links`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json() as LinksModel[];
    return limit 
      ? data.slice(0, limit)
      : data;

  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}
