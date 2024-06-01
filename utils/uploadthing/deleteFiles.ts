import getBaseURL from "../getBaseURL";

export default async function deleteFiles(...keys: string[]) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/uploadthing`, {
      method: 'DELETE',
      body: JSON.stringify(keys)
    })

    if (!response) {
      throw new Error('Error deleting file');
    }

    return response;
    
  } catch (error) {
    console.error(error);
    return [];
  }
}
