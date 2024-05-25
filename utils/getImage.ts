import { Image } from "@/types";

export default async function getImage(id: string) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' : '';

    const response = await fetch(`${baseUrl}/api/images/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as Image;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
