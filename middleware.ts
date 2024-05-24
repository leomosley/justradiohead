import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  if (!!token && request.nextUrl.pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/', request.url));
  } 

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  } 

  if (!token && request.method !== "GET") {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*'
  ],
};