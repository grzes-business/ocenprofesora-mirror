import { body } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q")?.toLowerCase() || "";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professor/search`,
      {
        method: "POST",
        body: JSON.stringify({
          // search: query,
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error searching professors:", error);
    return NextResponse.json(
      { error: "Błąd podczas wyszukiwania profesorów" },
      { status: 500 }
    );
  }
}
