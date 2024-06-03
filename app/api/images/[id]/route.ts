// /app/api/images/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET an image by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const image = await prisma.images.findUnique({
      where: { id },
      include: {
        collections: true,
      }
    });

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(image);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching image' }, { status: 500 });
  }
}

// PATCH (update) an image by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();
    const updatedImage = await prisma.images.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedImage);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating image' }, { status: 500 });
  }
}

// DELETE an image by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.images.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Image deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting image' }, { status: 500 });
  }
}
	