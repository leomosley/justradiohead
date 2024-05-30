import { toastSuccess, toastWarning } from "@/toast";

export default async function deleteLink(id: string) {
  try {
    const response = await fetch(`/api/links/${id}`, {
      method: 'DELETE'
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