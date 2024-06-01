import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function createImage(
  imageURL: string,
  name: string,
  description: string,
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/images/`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        imageURL: imageURL,
        description: description,
      })
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


