import { degrees } from "framer-motion";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, surname, degree } = body;

    // id: string;
    // content: string; // Content of the review
    // ratio: number; // Grade (1-5)
    // userId: string;
    // professorId: string;
    // created_at: Date;
    // updated_at: Date;

    if (!name || !surname || !degree) {
      return NextResponse.json(
        { error: "Data for a review is incomplete" },
        { status: 400 }
      );
    }

    // Retrieve the token from cookies
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized - no token found" },
        { status: 401 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professor`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          surname,
          degree,
        }),
      }
    );
    const data = await response.json();

    // Create response with token cookie
    const res = NextResponse.json({ ...data }, { status: response.status });

    return res;
  } catch (error) {
    console.error("Error during posting review:", error);
    return NextResponse.json(
      { error: "Błąd podczas logowania" },
      { status: 500 }
    );
  }
}
