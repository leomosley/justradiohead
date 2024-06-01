import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function createShow(
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
    const response = await fetch(`${base}/api/shows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      toastSuccess("Show created successfully");
      return response;
    } else {
      throw new Error("Error creating show");
    }
  } catch (error) {
    toastWarning("Error creating show");
    console.log(error);
  }
};


