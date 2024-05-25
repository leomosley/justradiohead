import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });



  if (!!token && request.nextUrl.pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/', request.url));
  } 

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  } 

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/sign-in/:path*',
    '/dashboard/:path*'
  ],
};