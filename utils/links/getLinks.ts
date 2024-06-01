import { Links } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getLinks(limit?: number) {
  try {
    const base = getBaseURL();
    const url = limit ? `/api/links?limit=${limit}` : '/api/links';
    const response = await fetch(`${base}${url}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error fetching links');
    }

    return await response.json() as Links[];

  } catch (error) {
    console.error(error);
  }
}
