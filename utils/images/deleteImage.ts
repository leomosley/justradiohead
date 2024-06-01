import { toastSuccess, toastWarning } from "@/toast";
import deleteFiles from "../uploadthing/deleteFiles";
import getImage from "./getImage";
import getBaseURL from "../getBaseURL";

export default async function deleteImage(id: string) {
  try {
    const prismaGetResponse = await getImage(id);

    if (!prismaGetResponse) {
      throw new Error("Image not found");
    }

    const key = prismaGetResponse.imageURL.split("/").pop() ?? "";
    const utDeleteResponse = await deleteFiles(key);

    if (!utDeleteResponse)  {
      throw new Error("File couldn't be deleted");
    }

    const base = getBaseURL();
    const prismaDeleteResponse = await fetch(`${base}/api/images/${id}`, {
      method: 'DELETE',
    });
    
    if (prismaDeleteResponse.ok) {
      toastSuccess("Image deleted");
      return prismaDeleteResponse;
    } else {
      throw new Error("Error deleting image");
    }
  } catch (error) {
    toastWarning("Error deleting image");
  }
};


