import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

import { COOKIE_TOKEN_FIELD, verifyJWT } from './core/shared/libs/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = cookies().get(COOKIE_TOKEN_FIELD)?.value;

  const isOnAdmin = request.nextUrl.pathname.startsWith('/admin');

  if (isOnAdmin) {
    if (!token) {
      return Response.redirect(new URL('/login', request.nextUrl));
    }

    const isValidSession = await verifyJWT(token);

    if (!isValidSession) {
      return Response.redirect(new URL('/login', request.nextUrl));
    }

    return null;
  }

  if (token) {
    const isValidSession = await verifyJWT(token);

    if (!isValidSession) return null;

    return Response.redirect(new URL('/admin', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
};
