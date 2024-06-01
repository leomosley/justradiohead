import { Links } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getLink(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/links/${id}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Error fetching link');
    }

    return await response.json() as Links;
    
  } catch (error) {
    console.error(error);
  }
}
