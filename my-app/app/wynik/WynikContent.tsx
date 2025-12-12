"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Profesor } from "@/types";
import { mockInstitutions } from "@/lib/data/mockInstitutions";

export default function WynikContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [profesorowie, setProfessorowie] = useState<Profesor[]>([]);
  const [ladowanie, setLadowanie] = useState(true);
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      wyszukajProfesorow(q);
    } else {
      wyszukajProfesorow("");
    }
  }, [searchParams]);

  const wyszukajProfesorow = async (searchQuery: string) => {
    setLadowanie(true);
    try {
      const response = await fetch(
        `/api/professors/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setProfessorowie(data.profesorowie || []);
    } catch (error) {
      console.error("Error searching professors:", error);
    } finally {
      setLadowanie(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/wynik?q=${encodeURIComponent(query)}`);
  };

  const getInstitutionNames = (instIds: string[]) => {
    return instIds
      .map(
        (id) =>
          mockInstitutions.find((inst) => inst.id_instytucji === id)?.nazwa
      )
      .filter(Boolean)
      .join(", ");
  };

  const renderStars = (rating: number) => {
    return (
      <div className="rating rating-sm">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            className="mask mask-star-2 bg-warning"
            checked={star === Math.round(rating)}
            readOnly
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Search Section */}
      <div className="bg-base-100 py-8 shadow-sm border-b border-base-200">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="join w-full">
              <input
                type="text"
                placeholder="Wpisz imię i nazwisko profesora..."
                className="input input-bordered join-item w-full bg-base-100 text-base-content"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary join-item">
                Szukaj
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results */}
      <main className="container mx-auto px-4 py-8">
        {ladowanie ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold">
                Wyniki wyszukiwania
                {searchParams.get("q") && (
                  <span className="text-base-content opacity-80">
                    {" "}
                    dla: &quot;{searchParams.get("q")}&quot;
                  </span>
                )}
              </h1>
              <p className="text-base-content opacity-80 mt-2">
                Znaleziono: {profesorowie.length}{" "}
                {profesorowie.length === 1 ? "profesor" : "profesorów"}
              </p>
            </div>

            {profesorowie.length === 0 ? (
              <div className="bg-info border border-info rounded-lg p-6">
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info-content shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-info-content">
                    Nie znaleziono profesorów. Spróbuj wyszukać ponownie lub{" "}
                    <Link
                      href="/dodaj-profesora"
                      className="text-info-content font-semibold hover:underline"
                    >
                      dodaj nowego profesora
                    </Link>
                    .
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {profesorowie.map((profesor) => (
                  <Link
                    key={profesor.id}
                    href={`/profesor/${profesor.id}`}
                    className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border border-base-200"
                  >
                    <div className="card-body">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h2 className="card-title text-2xl">
                            {profesor.degree} {profesor.name} {profesor.surname}
                          </h2>
                          <p className="text-sm text-base-content opacity-80 mt-2">
                            {/* {getInstitutionNames(profesor.tab_id_instytucji)} */}{" "}
                            - brakuje narazie tab_id_instytucji u profesora
                          </p>
                          {profesor.szczegoly && (
                            <p className="text-sm text-base-content mt-3">
                              {profesor.szczegoly}
                            </p>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="stat-value text-primary">
                            {profesor.ocena
                              ? profesor.ocena.toFixed(1)
                              : "undefined"}
                          </div>
                          <div className="mt-2">
                            {renderStars(profesor.ocena ? profesor.ocena : 0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
