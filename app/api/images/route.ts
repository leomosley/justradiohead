// /app/api/images/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getLimit from '@/utils/getLimit';

// GET all images
export async function GET(request: Request) {
  try {
    const limit = getLimit(request);
    const images = await prisma.images.findMany({
      take: limit
    });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching images' }, { status: 500 });
  }
}

// POST a new image 
export async function POST(request: Request) {
  try {
    const { imageURL, name, description, collections } = await request.json();
    if (!imageURL || !name || !description) {
      return NextResponse.json({ error: `missing required fields` }, { status: 400 });
    }

    const newImage = await prisma.images.create({
      data: {
        imageURL,
        name,
        description,
        collections: {
          connect: collections
        }
      },
    });

    return NextResponse.json(newImage, { status: 201 });

  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json({ error: 'Error creating image' }, { status: 500 });
  }
}