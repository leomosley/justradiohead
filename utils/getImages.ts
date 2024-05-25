import { Image } from "@/types";

export default async function getImages(limit?: number) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/images`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json() as Image[];
    return limit 
      ? data.slice(0, limit)
      : data;

  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
