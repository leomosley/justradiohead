import prisma from "@/lib/prisma";

export default async function getShow(id: string) {
  try {
    const response = await prisma.show.findUnique({
      where: {
        id: id,
      }
    })
    
    if (!response) {
      throw new Error('Error fetching post');
    }

  } catch (error) {
    console.error(error);
    return [];
  }
}
