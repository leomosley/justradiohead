import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function updateImage(
  id: string,
  data: {
    name: string;
    imageURL: string;
    description: string;
    collections: { id: string }[];
  },
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/images/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      toastSuccess("Image updated successfully");
      return response;
    } else {
      throw new Error("Error updating images information");
    }
  } catch (error) {
    toastWarning("Error updating images information");
    console.log(error);
  }
};


