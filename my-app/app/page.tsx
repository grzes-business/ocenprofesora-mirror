"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { zalogowany, user, wyloguj } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/wynik?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex justify-between flex-col from-blue-50 via-indigo-50 to-purple-50">
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
        <div className="flex-none gap-2">
          {zalogowany ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar placeholder"
                aria-label="Menu użytkownika"
              >
                <div className="bg-primary text-primary-content w-10 rounded-full">
                  <span className="text-sm font-semibold">
                    {user?.imie_wyswietlane?.charAt(0) || "U"}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-gray-200"
              >
                <li>
                  <Link
                    href="/profil"
                    className="text-gray-700 hover:bg-indigo-50"
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dodaj-profesora"
                    className="text-gray-700 hover:bg-indigo-50"
                  >
                    Dodaj profesora
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dodaj-instytucje"
                    className="text-gray-700 hover:bg-indigo-50"
                  >
                    Dodaj instytucję
                  </Link>
                </li>
                <li>
                  <button
                    onClick={wyloguj}
                    className="text-gray-700 hover:bg-indigo-50"
                  >
                    Wyloguj
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/logowanie"
                className="btn btn-ghost text-gray-700 hover:bg-indigo-50"
              >
                Logowanie
              </Link>
              <Link href="/rejestracja" className="btn btn-primary">
                Rejestracja
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Znajdź swojego profesora
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Przeglądaj opinie studentów i oceniaj wykładowców akademickich
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="join w-full max-w-2xl">
              <input
                type="text"
                placeholder="Wpisz imię i nazwisko profesora..."
                className="input input-bordered input-lg join-item w-full bg-white text-gray-900 placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg join-item"
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
                Szukaj
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
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
                <p className="text-center text-gray-700">
                  Wyszukuj profesorów z różnych uczelni w Polsce
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
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
                <p className="text-center text-gray-700">
                  Przeglądaj oceny i opinie innych studentów
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
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
                <p className="text-center text-gray-700">
                  Dodawaj własne recenzje i oceny wykładowców
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-20 pb-8">
        <div className="text-center text-gray-600">
          <p>
            Copyright © 2025 - OcenProfesora.pl - Polska społeczność studencka
          </p>
        </div>
      </footer>
    </div>
  );
}
