import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server' // Make sure this is 'next/server' not 'next/request'

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.get('codeaois-session')
  
  if (request.nextUrl.pathname.startsWith('/dashboard') && !hasSession) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}