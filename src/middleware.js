import { NextResponse } from 'next/server';
import {AUTH_TOKEN_USER, PROFILE_USER} from "@/utils/cookie/server";
import {AUTH_TOKEN_ADMIN} from "@/utils/cookie/client";
import {PERMISSION_PAGE} from "@/utils/permissions";
import {hasPermission} from "@/utils/helper";

export async  function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const tokenAdmin = request.cookies.get(AUTH_TOKEN_ADMIN)?.value;
    if (tokenAdmin) {
      if (request.nextUrl.pathname === '/admin/login') {
        return NextResponse.rewrite(new URL('/admin', request.url));
      }
    } else {
      return NextResponse.rewrite(new URL('/admin/login', request.url));
    }
  } else if (request.nextUrl.pathname.startsWith('/')) {
    const token = request.cookies.get(AUTH_TOKEN_USER)?.value;
    let authUser;
    if (request.cookies.has(PROFILE_USER)) {
      authUser = JSON.parse(request.cookies.get(PROFILE_USER)?.value);
    }
    if (token && authUser) {
      if (
        PERMISSION_PAGE[request.nextUrl.pathname] &&
        !hasPermission(PERMISSION_PAGE[request.nextUrl.pathname], authUser.permissions)
      ) {
        return NextResponse.rewrite(new URL('/403', request.url));
      } else {
        if (request.nextUrl.pathname === '/login') {
          return NextResponse.rewrite(new URL('/', request.url));
        }
      }
    } else {
      if (request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/register') {
        return NextResponse.rewrite(new URL('/login', request.url));
      }
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
