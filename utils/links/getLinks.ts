import prisma from "@/lib/prisma";

export default async function getLinks(limit?: number) {
  try {
    const response = await prisma.links.findMany({
      take: limit
    });

    if (!response) {
      throw new Error('Error fetching links');
    }

    return response;

  } catch (error) {
    console.error(error);
    return [];
  }
}