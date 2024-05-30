// /app/api/shows/[id]/route.ts
import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma'; 

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
    console.error('Error fetching show:', error);
    return NextResponse.json({ error: 'Error fetching show' }, { status: 500 });
  }
}

// PATCH (update) a show by ID
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await request.json();
    const updatedShow = await prisma.show.update({
      where: { 
        id: id 
      },
      data: data,
    });

    return NextResponse.json(updatedShow);
  } catch (error) {
    console.error('Error updating show:', error);
    return NextResponse.json({ error: 'Error updating show' }, { status: 500 });
  }
}

// DELETE a show by ID
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  try {
    await prisma.show.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: 'Show deleted successfully' });
  } catch (error) {
    console.error('Error deleting show:', error);
    return NextResponse.json({ error: 'Error deleting show' }, { status: 500 });
  }
}