import { NextRequest, NextResponse } from "next/server";
import { mockInstitutions } from "@/lib/data/mockInstitutions";
import { isUsingMockData } from "@/lib/utils/dataSource";

export async function GET() {
  try {
    if (isUsingMockData()) {
      return NextResponse.json(mockInstitutions);
    } else {
      // TODO: Call real API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/institutions`
      );
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error fetching institutions:", error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania instytucji" },
      { status: 500 }
    );
  }
}
