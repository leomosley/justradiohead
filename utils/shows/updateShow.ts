import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function updateShow(
  id: string,
  data: {
    date: string;
    title: string;
    venue: string;
    location: string;
    ticketLink: string;
  },
) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/shows/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      toastSuccess("Show information updated successfully");
      return response;
    } else {
      throw new Error("Error updating show information");
    }
  } catch (error) {
    toastWarning("Error updating show information");
    console.log(error);
  }
};


