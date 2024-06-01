import { utapi } from "@/lib/uploadthing";

export default async function getFiles(limit?: number) {
  try {
    const response = await utapi.listFiles({ 
      limit: limit 
    });

    if (!response) {
      throw new Error('Error fetching files');
    }

    return response;
    
  } catch (error) {
    console.error(error);
    return [];
  }
}
