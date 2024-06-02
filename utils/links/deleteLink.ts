import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function deleteLink(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/links/${id}`, {
      method: 'DELETE',
      cache: 'no-store'
    })
    
    if (response.ok) {
      toastSuccess("Link deleted successfully");
      return response;
    } else {
      throw new Error("Error deleting link");
    }
  } catch (error) {
    toastWarning("Error deleting link");
    console.log(error);
  }
};