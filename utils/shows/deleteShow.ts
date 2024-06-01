import { toastSuccess, toastWarning } from "@/toast";
import getBaseURL from "../getBaseURL";

export default async function deleteShow(id: string) {
  try {
    const base = getBaseURL();
    const response = await fetch(`${base}/api/shows/${id}`, {
      method: 'DELETE'
    })
    
    if (response.ok) {
      toastSuccess("Show deleted successfully");
      return response;
    } else {
      throw new Error("Error deleting show");
    }
  } catch (error) {
    toastWarning("Error deleting show");
    console.log(error);
  }
};