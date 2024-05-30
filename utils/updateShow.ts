import { toastSuccess, toastWarning } from "@/toast";
import prisma from "@/lib/prisma";

export default async function updateShow(
  id: string,
  data: {
    date: string;
    title: string;
    venue: string;
    location: string;
    tickectLink: string;
  },
) {
  try {
    const response = await prisma.show.update({
      where: {
        id: id
      },
      data: data
    });
    
    if (response.id) {
      toastSuccess("Show information updated successfully");
    } else {
      throw new Error("Error updating show information");
    }
  } catch (error) {
    toastWarning("Error updating show information");
    console.log(error);
  }
};


