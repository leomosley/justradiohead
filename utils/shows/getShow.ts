import { Show } from "@prisma/client";
import getBaseURL from "../getBaseURL";

export default async function getShow(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/show/${id}`,{
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error('Error fetching post');
    }

    return await response.json() as Show;
    
  } catch (error) {
    console.error(error);
  }
}
