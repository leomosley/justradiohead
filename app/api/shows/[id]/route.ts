// /app/api/shows/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';  // Make sure you have a prisma client set up

// GET a show by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const show = await prisma.show.findUnique({
      where: { id },
    });

    if (!show) {
      return NextResponse.json({ error: 'Show not found' }, { status: 404 });
    }

    return NextResponse.json(show);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching show' }, { status: 500 });
  }
}

// PATCH (update) a show by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();
    const updatedShow = await prisma.show.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedShow);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating show' }, { status: 500 });
  }
}

// DELETE a show by ID
export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.show.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Show deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting show' }, { status: 500 });
  }
}