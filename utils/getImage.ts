import { ImageModel } from "@/types";

export default async function getImage(id: string) {
  try {
    const baseUrl = process.env.VERCEL ? '' : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/images/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as ImageModel;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
