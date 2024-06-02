import { Images } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getImages(limit?: number) {
  try {
    const base = getBaseURL();
    const url = limit ? `/api/images?limit=${limit}` : '/api/images';
    const response = await fetch(`${base}${url}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Error fetching shows');
    }

    return await response.json() as Images[];
    
  } catch (error) {
    console.error(error);
  }
}
