import { Collection } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getCollections(limit?: number) {
  try {
    const base = getBaseURL();
    const url = limit ? `/api/collections?limit=${limit}` : '/api/collections';
    const response = await fetch(`${base}${url}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Error fetching collections');
    }

    return await response.json() as Collection[];
    
  } catch (error) {
    console.error(error);
  }
}
