// /app/api/collections/[id]/images/[imageId]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Add an image to a collection
export async function PUT(request: Request) {
  const url = new URL(request.url);
  const paths = url.pathname.split('/');
  const collectionId = paths[2];
  const imageId = paths.pop();

  try {
    const collection = await prisma.collection.update({
      where: { id: collectionId },
      data: {
        images: {
          connect: { id: imageId },
        },
      },
    });

    return NextResponse.json(collection);
  } catch (error) {
    return NextResponse.json({ error: 'Error adding image to collection' }, { status: 500 });
  }
}

// Remove an image from a collection
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const paths = url.pathname.split('/');
    const collectionId = paths[2];
    const imageId = paths.pop();

    const collection = await prisma.collection.update({
      where: { id: collectionId },
      data: {
        images: {
          disconnect: { id: imageId },
        },
      },
    });

    return NextResponse.json(collection);
  } catch (error) {
    return NextResponse.json({ error: 'Error removing image from collection' }, { status: 500 });
  }
}
