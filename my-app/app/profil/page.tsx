"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { mockInstitutions } from "@/lib/data/mockInstitutions";

export default function ProfilPage() {
  const router = useRouter();
  const { zalogowany, user, wyloguj } = useAuth();

  useEffect(() => {
    if (!zalogowany) {
      router.push("/logowanie");
    }
  }, [zalogowany, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const getInstitutionNames = (instIds: string[]) => {
    return instIds
      .map(
        (id) =>
          mockInstitutions.find((inst) => inst.id_instytucji === id)?.nazwa
      )
      .filter(Boolean)
      .join(", ");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="navbar bg-white shadow-md border-b border-gray-200">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl font-bold text-primary hover:bg-indigo-50"
          >
            OcenProfesora.pl
          </Link>
        </div>
        <div className="flex-none">
          <Link
            href="/"
            className="btn btn-ghost text-gray-700 hover:bg-indigo-50"
          >
            ← Strona główna
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="card bg-white shadow-xl border border-gray-200 mb-6">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="User Avatar"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800">
                  {user.imie_wyswietlane || "Użytkownik"}
                </h1>
                <p className="text-gray-600">{user.email}</p>
                {user.zweryfikowany && (
                  <div className="badge badge-success gap-1 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Zweryfikowany
                  </div>
                )}
              </div>
            </div>

            {user.bio && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">O mnie</h3>
                <p className="text-gray-600">{user.bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="card bg-white shadow-xl border border-gray-200 mb-6">
          <div className="card-body">
            <h2 className="card-title text-2xl text-gray-800 mb-4">
              Informacje o profilu
            </h2>

            <div className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Kierunek studiów
                  </span>
                </label>
                <div className="text-gray-800">{user.kierunek}</div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Uczelnie
                  </span>
                </label>
                <div className="text-gray-800">
                  {getInstitutionNames(user.tab_id_instytucji) || "Brak"}
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Status konta
                  </span>
                </label>
                <div className="text-gray-800">
                  {user.zweryfikowany ? "Zweryfikowane" : "Niezweryfikowane"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card bg-white shadow-xl border border-gray-200 mb-6">
          <div className="card-body">
            <h2 className="card-title text-2xl text-gray-800 mb-4">
              Szybkie akcje
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/dodaj-profesora"
                className="btn btn-outline btn-primary justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Dodaj profesora
              </Link>

              <Link
                href="/dodaj-instytucje"
                className="btn btn-outline btn-primary justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Dodaj instytucję
              </Link>

              <Link
                href="/wynik"
                className="btn btn-outline btn-secondary justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Wyszukaj profesorów
              </Link>

              <button
                onClick={wyloguj}
                className="btn btn-outline btn-error justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Wyloguj się
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
