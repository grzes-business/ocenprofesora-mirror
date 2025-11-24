import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Create response
    const res = NextResponse.json(
      { message: "Wylogowano pomyślnie" },
      { status: 200 }
    );

    // Clear the token cookie by setting it to expire immediately
    res.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Expire immediately
      path: "/",
    });

    return res;
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { error: "Błąd podczas wylogowywania" },
      { status: 500 }
    );
  }
}
