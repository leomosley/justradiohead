import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getImages(limit?: number) {
  try {
    const response = await prisma.images.findMany({
      take: limit
    });

    if (!response) {
      throw new Error('Error fetching shows');
    }

    return response;
    
  } catch (error) {
    console.error(error);
    return [];
  }
}
