import { NextRequest, NextResponse } from "next/server";
import { mockUsers, MOCK_USER_CREDENTIALS } from "@/lib/data/mockUsers";
import { isUsingMockData } from "@/lib/utils/dataSource";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, haslo } = body;

    if (!email || !haslo) {
      return NextResponse.json(
        { error: "Email i hasło są wymagane" },
        { status: 400 }
      );
    }

    if (isUsingMockData()) {
      // Check against mock credentials first
      if (
        email === MOCK_USER_CREDENTIALS.email &&
        haslo === MOCK_USER_CREDENTIALS.haslo
      ) {
        const mockUser = {
          id_user: "mock_user",
          email: MOCK_USER_CREDENTIALS.email,
          kierunek: "Informatyka",
          tab_id_instytucji: ["inst_1"],
          imie_wyswietlane: "Testowy Student",
          zweryfikowany: true,
        };

        return NextResponse.json({
          success: true,
          user: mockUser,
          token: "mock-jwt-token",
        });
      }

      // Check against mock users
      const user = mockUsers.find(
        (u) => u.email === email && u.haslo === haslo
      );

      if (user) {
        // Don't send password to client
        const { haslo: _, ...userWithoutPassword } = user;

        return NextResponse.json({
          success: true,
          user: userWithoutPassword,
          token: "mock-jwt-token",
        });
      }

      return NextResponse.json(
        { error: "Nieprawidłowy email lub hasło" },
        { status: 401 }
      );
    } else {
      // TODO: Call real API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, haslo }),
        }
      );
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Błąd podczas logowania" },
      { status: 500 }
    );
  }
}
