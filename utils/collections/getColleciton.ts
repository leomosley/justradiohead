import { Collection } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getCollection(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/collections/${id}`, {
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error('Error fetching collection');
    }
    
    return await response.json() as Collection;

  } catch (error) {
    console.error(error);
  }
}
