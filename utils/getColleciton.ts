import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getCollection(id: string) {
  try {
    const response = await prisma.collection.findUnique({
      where: {
        id: id,
      }
    })
    
    if (!response) {
      throw new Error('Error fetching collection');
    }

  } catch (error) {
    console.error(error);
    return [];
  }
}
