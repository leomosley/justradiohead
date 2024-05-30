import prisma from "@/lib/prisma";

export default async function getImage(id: string) {
  try {
    const response = await prisma.images.findUnique({
      where: {
        id: id,
      }
    })
    
    if (!response) {
      throw new Error('Error fetching image');
    }

  } catch (error) {
    console.error(error);
    return [];
  }
}
