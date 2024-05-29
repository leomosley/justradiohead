import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getCollections(limit?: number) {
  try {
    const response = await prisma.collection.findMany({
      take: limit
    });

    if (!response) {
      throw new Error('Error fetching collections');
    }

    return response;
    
  } catch (error) {
    console.error(error);
    return [];
  }
}
