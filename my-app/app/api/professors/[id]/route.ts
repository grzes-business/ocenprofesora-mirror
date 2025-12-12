import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/professor/${id}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching professor:", error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania danych profesora" },
      { status: 500 }
    );
  }
}
