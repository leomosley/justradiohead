import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
import { NextResponse } from 'next/server'
import { utapi } from "@/lib/uploadthing";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
 
  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(request: Request) {
  try {
    const keys = await request.json();
    await utapi.deleteFiles(keys);

    return NextResponse.json({ message: 'File deleted successfully (uploadthing)' });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}