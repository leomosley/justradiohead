import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getShows(limit?: number) {
  try {
    const response = await prisma.show.findMany({
      orderBy: {
        date: 'desc'
      },
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
