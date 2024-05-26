// /app/api/links/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET a link by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const collection = await prisma.links.findUnique({
      where: { id },
    });

    if (!collection) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 });
    }

    return NextResponse.json(collection);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching link' }, { status: 500 });
  }
}

// PATCH (update) a link by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();
    const updatedCollection = await prisma.links.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedCollection);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating link' }, { status: 500 });
  }
}

// DELETE a link by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.links.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Link deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting Link' }, { status: 500 });
  }
}
