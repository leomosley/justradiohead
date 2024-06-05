// /app/api/images/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Collection } from '@prisma/client';

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
    const { name, imageURL, descrption, collections }= await request.json();

    const currentImage = await prisma.images.findUnique({
      where: {
        id: id
      },
      include: {
        collections: true
      }
    });

    if (!currentImage) {
      throw new Error();
    }

    const currentCollectionsIds = currentImage.collections.map(c => c.id);

    const collectionsToConnect = collections.filter(
      (collection: Collection) => !currentCollectionsIds.includes(collection.id)
    ).map((collection: Collection) => ({ id: collection.id }));

    const collectionsToDisconnect = currentCollectionsIds.filter(
      id => !collections.includes(id)
    ).map(id => ({ id: id }));

    const updatedImage = await prisma.images.update({
      where: { id },
      data: {
        name: name,
        description: descrption,
        imageURL: imageURL,
        collections: {
          connect: collectionsToConnect,
          disconnect: collectionsToDisconnect
        }
      }
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
	