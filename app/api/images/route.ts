// /app/api/images/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all images
export async function GET() {
  try {
    const images = await prisma.images.findMany();
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching images' }, { status: 500 });
  }
}

// POST a new image 
export async function POST(request: Request) {
  try {
    const { imageURL, name, description } = await request.json();
    if (!imageURL || !name || !description) {
      return NextResponse.json({ error: `missing required fields` }, { status: 400 });
    }

    const newImage = await prisma.images.create({
      data: {
        imageURL,
        name,
        description,
      },
    });

    return NextResponse.json(newImage, { status: 201 });
    
  } catch (error) {
    console.error('Error creating image:', error);
    return NextResponse.json({ error: 'Error creating image' }, { status: 500 });
  }
}

