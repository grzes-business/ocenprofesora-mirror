import { NextRequest, NextResponse } from "next/server";
import { mockUsers, MOCK_USER_CREDENTIALS } from "@/lib/data/mockUsers";
import { isUsingMockData } from "@/lib/utils/dataSource";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, surname, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email i hasło są wymagane" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, email, password }),
      }
    );
    const data = await response.json();

    // Create response with token cookie
    const res = NextResponse.json(
      { ...data, email },
      { status: response.status }
    );

    // Set token cookie if registration was successful and token exists
    if (response.ok && data.token) {
      // Set cookie to expire in 7 days
      const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds

      res.cookies.set("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: maxAge,
        path: "/",
      });
    }

    return res;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Błąd podczas rejestracji" },
      { status: 500 }
    );
  }
}
