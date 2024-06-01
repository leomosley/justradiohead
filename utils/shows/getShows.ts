import { Show } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getShows(limit?: number) {
  try {
    const base = getBaseURL();
    const url = limit ? `/api/shows?limit=${limit}` : '/api/shows';
    const response = await fetch(`${base}${url}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error fetching shows');
    }

    return await response.json() as Show[];
    
  } catch (error) {
    console.error(error);
  }
}
