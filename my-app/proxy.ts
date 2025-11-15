import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // For DUMMY data source, we rely on client-side localStorage authentication
  // Proxy cannot access localStorage, so we'll allow access and let
  // client-side components handle the redirect if needed

  // For API mode, you would check token from cookies here
  const dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE || "DUMMY";

  if (dataSource === "DUMMY") {
    // Allow all requests when using DUMMY mode
    // Client-side auth will handle redirects
    return NextResponse.next();
  }

  // For API mode, check for token in cookies
  const token = request.cookies.get("token")?.value;

  // Protected routes that require authentication
  const protectedPaths = ["/dodaj-profesora", "/dodaj-instytucje", "/profil"];

  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirect to login if accessing protected route without token
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/logowanie", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dodaj-profesora/:path*",
    "/dodaj-instytucje/:path*",
    "/profil/:path*",
  ],
};
