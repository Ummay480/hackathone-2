import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This applies to the /api/* routes for example:
export function middleware(req: NextRequest) {
  if (req.url.includes("/api")) {
    console.log("API route accessed");
    // You can modify request headers, etc., but don't return a response unless necessary.
    return NextResponse.next();  // Continue with the request
  }
  return NextResponse.next();  // Continue with the request for other pages
}
