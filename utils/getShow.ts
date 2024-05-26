import { ShowModel } from "@/types";

export default async function getShow(id: string) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.VERCEL_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/shows/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as ShowModel;
  } catch (error) {
    console.error('Error fetching link:', error);
    return [];
  }
}
