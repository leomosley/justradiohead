import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function updateLink(
  id: string,
  data: {
    text: string;
    url: string;
  },
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/links/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      toastSuccess("Link information successfully");
      return response;
    } else {
      throw new Error("Error updating link information");
    }
  } catch (error) {
    toastWarning("Error updating link information");
    console.log(error);
  }
};


