import { LinksModel } from "@/types";

export default async function getLink(id: string) {
  try {
    const baseUrl = process.env.VERCEL ? '' : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/links/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as LinksModel;
  } catch (error) {
    console.error('Error fetching link:', error);
    return [];
  }
}
