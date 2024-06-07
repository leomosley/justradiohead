import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function createColection(
  title: string,
  description: string,
  images: { id: string}[]
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/collections/`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
        images: images
      }),
      cache: 'no-store'
    });
    
    if (response.ok) {
      toastSuccess("Collection created");
      return response;
    } else {
      throw new Error("Error creating collection");
    }
  } catch (error) {
    toastWarning("Error creating collection");
  }
};


