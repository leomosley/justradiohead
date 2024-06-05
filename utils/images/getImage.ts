import { Images } from "@prisma/client";
import getBaseURL from "../getBaseURL";
import { ImagesWithCollections } from "@/types";

export default async function getImage(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/images/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Error fetching image');
    }

    return await response.json() as ImagesWithCollections;

  } catch (error) {
    console.error(error);
  }
}
