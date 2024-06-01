import { NextResponse } from 'next/server';
import { utapi } from "@/lib/uploadthing";

export async function GET(request: Request, { params }: { params: { file: string } }) {
  try {
    const { file } = params;
    const files = await utapi.getFileUrls(file);  

    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { file: string } }) {
  try {
    const { file } = params;
    await utapi.deleteFiles(file);

    return NextResponse.json({ message: 'File deleted successfully (uploadthing)' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting file (uploadthing)' }, { status: 500 });
  }
}