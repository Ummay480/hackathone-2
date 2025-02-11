import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Middleware Configuration
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Apply to all routes except static files
};
