"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/wynik?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-200 flex justify-between flex-col">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
            Znajdź swojego profesora
          </h1>
          <p className="text-xl text-base-content opacity-80 mb-12">
            Przeglądaj opinie studentów i oceniaj wykładowców akademickich
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="join w-full max-w-2xl">
              <input
                type="text"
                placeholder="Wpisz imię i nazwisko profesora..."
                className="input input-bordered input-lg join-item w-full bg-base-100 text-base-content outline-none placeholder:text-base-content placeholder:opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary text-primary-content btn-lg join-item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Szukaj
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h2 className="card-title justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
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
                </h2>
                <p className="text-center text-base-content">
                  Wyszukuj profesorów z różnych uczelni w Polsce
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h2 className="card-title justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </h2>
                <p className="text-center text-base-content">
                  Przeglądaj oceny i opinie innych studentów
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h2 className="card-title justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </h2>
                <p className="text-center text-base-content">
                  Dodawaj własne recenzje i oceny wykładowców
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-20 pb-8">
        <div className="text-center text-base-content opacity-80">
          <p>
            Copyright © 2025 - OcenProfesora.pl - Polska społeczność studencka
          </p>
        </div>
      </footer>
    </div>
  );
}
