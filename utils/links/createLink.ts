import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function createLink(
  data: {
    text: string;
    url: string;
  },
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store'
    })
    
    if (response.ok) {
      toastSuccess("Link created successfully");
      return response;
    } else {
      throw new Error("Error creating link");
    }
  } catch (error) {
    toastWarning("Error creating link");
    console.log(error);
  }
};


