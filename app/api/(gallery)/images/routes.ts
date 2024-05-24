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
    const data = await request.json();
    const newImage = await prisma.images.create({
      data,
    });
    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating image' }, { status: 500 });
  }
}
