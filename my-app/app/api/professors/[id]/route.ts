import { NextRequest, NextResponse } from "next/server";
import { mockProfessors } from "@/lib/data/mockProfessors";
import { mockInstitutions } from "@/lib/data/mockInstitutions";
import { mockReviews } from "@/lib/data/mockReviews";
import { isUsingMockData } from "@/lib/utils/dataSource";
import { ProfessorWithDetails } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (isUsingMockData()) {
      // Use mock data
      const professor = mockProfessors.find((p) => p.id_profesora === id);

      if (!professor) {
        return NextResponse.json(
          { error: "Profesor nie został znaleziony" },
          { status: 404 }
        );
      }

      // Populate institutions
      const instytucje = mockInstitutions.filter((inst) =>
        professor.tab_id_instytucji.includes(inst.id_instytucji)
      );

      // Get reviews
      const wpisy = mockReviews.filter((r) => r.id_profesora === id);

      const result: ProfessorWithDetails = {
        ...professor,
        instytucje,
        wpisy,
      };

      return NextResponse.json(result);
    } else {
      // TODO: Call real API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/professors/${id}`
      );
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error fetching professor:", error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania danych profesora" },
      { status: 500 }
    );
  }
}
