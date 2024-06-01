// /app/api/links/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getLimit from '@/utils/getLimit';

// GET all links
export async function GET(request: Request) {
  try {
    const limit = getLimit(request);
    const links = await prisma.links.findMany({
      take: limit
    });
    return NextResponse.json(links);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching links' }, { status: 500 });
  }
}

// POST a new link
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newLink = await prisma.links.create({
      data,
    });
    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating link' }, { status: 500 });
  }
}