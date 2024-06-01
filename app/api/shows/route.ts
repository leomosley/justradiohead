// /app/api/shows/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';  // Make sure you have a prisma client set up
import getLimit from '@/utils/getLimit';

// GET all shows
export async function GET(request: Request) {
  try {
    const limit = getLimit(request);
    const shows = await prisma.show.findMany({
      take: limit
    });
    return NextResponse.json(shows);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching shows' }, { status: 500 });
  }
}

// POST a new show
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newShow = await prisma.show.create({
      data,
    });
    return NextResponse.json(newShow, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating show' }, { status: 500 });
  }
}