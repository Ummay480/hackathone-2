import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default clerkMiddleware((req: NextRequest) => {
  return NextResponse.next();
});

// Configure which routes the middleware applies to
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Apply to all routes except static files (_next, public assets)
};
