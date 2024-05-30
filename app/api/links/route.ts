// /app/api/links/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all links
export async function GET() {
  try {
    const collections = await prisma.links.findMany();
    return NextResponse.json(collections);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching links' }, { status: 500 });
  }
}

// POST a new link
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newCollection = await prisma.links.create({
      data,
    });
    return NextResponse.json(newCollection, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating link' }, { status: 500 });
  }
}