// /app/api/collections/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET a collection by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const collection = await prisma.collection.findUnique({
      where: { id },
    });

    if (!collection) {
      return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
    }

    return NextResponse.json(collection);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching collection' }, { status: 500 });
  }
}

// PATCH (update) a collection by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();
    const updatedCollection = await prisma.collection.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedCollection);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating collection' }, { status: 500 });
  }
}

// DELETE a collection by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.collection.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Collection deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting collection' }, { status: 500 });
  }
}