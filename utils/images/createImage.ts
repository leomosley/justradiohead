import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function createImage(
  imageURL: string,
  name: string,
  description: string,
  collections: { id: string}[]
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/images/`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        imageURL: imageURL,
        description: description,
        collections: collections
      }),
      cache: 'no-store'
    });
    
    if (response.ok) {
      toastSuccess("Image uploaded");
      return response;
    } else {
      throw new Error("Error uploading image");
    }
  } catch (error) {
    toastWarning("Error uploading image");
  }
};


