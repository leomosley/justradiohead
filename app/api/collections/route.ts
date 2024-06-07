// /app/api/collections/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getLimit from '@/utils/getLimit';

// GET all collections
export async function GET(request: Request) {
  try {
    const limit = getLimit(request);
    const collections = await prisma.collection.findMany({
      take: limit
    });
    return NextResponse.json(collections);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching collections' }, { status: 500 });
  }
}

// POST a new collection
export async function POST(request: Request) {
  try {
    const { images, title, description } = await request.json();
    if (!title || !description) {
      return NextResponse.json({ error: `missing required fields` }, { status: 400 });
    }

    const newCollection = await prisma.collection.create({
      data: {
        title: title,
        description: description,
        images: {
          connect: images
        }
      }
    });
    return NextResponse.json(newCollection, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating collection' }, { status: 500 });
  }
}