import { toastSuccess, toastWarning } from "@/toast";
import prisma from "@/lib/prisma";

export default async function createImage(
  imageURL: string,
  name: string,
  description: string,
) {
  try {
    const response = await prisma.images.create({
      data: {
        name: name,
        imageURL: imageURL,
        description: description,
      }
    });
    
    if (response.id) {
      toastSuccess("Image uploaded");
    } else {
      throw new Error("Error uploading image");
    }
  } catch (error) {
    toastWarning("Error uploading image");
  }
};

