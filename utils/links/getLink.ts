import prisma from "@/lib/prisma";

export default async function getLink(id: string) {
  try {
    const response = await prisma.links.findUnique({
      where: {
        id: id,
      }
    })
    
    if (!response) {
      throw new Error('Error fetching link');
    }

  } catch (error) {
    console.error(error);
    return [];
  }
}