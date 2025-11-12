import { NextRequest, NextResponse } from "next/server";
import { mockProfessors } from "@/lib/data/mockProfessors";
import { mockInstitutions } from "@/lib/data/mockInstitutions";
import { isUsingMockData } from "@/lib/utils/dataSource";
import { Profesor, SearchResult } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q")?.toLowerCase() || "";

    if (isUsingMockData()) {
      // Search in mock data
      let results: Profesor[] = mockProfessors;

      if (query) {
        results = mockProfessors.filter(
          (prof) =>
            prof.imie.toLowerCase().includes(query) ||
            prof.nazwisko.toLowerCase().includes(query) ||
            `${prof.imie} ${prof.nazwisko}`.toLowerCase().includes(query)
        );
      }

      const response: SearchResult = {
        profesorowie: results,
        znaleziono: results.length,
      };

      return NextResponse.json(response);
    } else {
      // TODO: Call real API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/professors/search?q=${query}`
      );
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error searching professors:", error);
    return NextResponse.json(
      { error: "Błąd podczas wyszukiwania profesorów" },
      { status: 500 }
    );
  }
}
