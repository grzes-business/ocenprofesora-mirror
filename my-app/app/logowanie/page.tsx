"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function LogowaniePage() {
  const [email, setEmail] = useState("");
  const [haslo, setHaslo] = useState("");
  const [blad, setBlad] = useState("");
  const [ladowanie, setLadowanie] = useState(false);
  const router = useRouter();
  const { zaloguj } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlad("");
    setLadowanie(true);

    const success = await zaloguj({ email, haslo });

    if (success) {
      router.push("/");
    } else {
      setBlad("Nieprawidłowy email lub hasło");
      setLadowanie(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl border border-gray-200">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              OcenProfesora.pl
            </Link>
            <h1 className="text-3xl font-bold mt-4 text-gray-800">Logowanie</h1>
            <p className="text-gray-600 mt-2">
              Witaj ponownie! Zaloguj się do swojego konta.
            </p>
          </div>

          {/* Test Credentials Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-blue-600 shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="text-xs text-gray-700">
                <div className="font-bold text-blue-800">
                  Testowe dane logowania:
                </div>
                <div>Email: test@ocenprofesora.pl</div>
                <div>Hasło: test123</div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {blad && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-red-600 shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-800 text-sm font-medium">{blad}</span>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="input input-bordered bg-white text-gray-900 placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={ladowanie}
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Hasło
                </span>
              </label>
              <input
                type="password"
                placeholder="Wprowadź hasło"
                className="input input-bordered bg-white text-gray-900 placeholder:text-gray-500"
                value={haslo}
                onChange={(e) => setHaslo(e.target.value)}
                required
                disabled={ladowanie}
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ladowanie}
              >
                {ladowanie ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Logowanie...
                  </>
                ) : (
                  "Zaloguj się"
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="divider">LUB</div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Nie masz jeszcze konta?{" "}
              <Link href="/rejestracja" className="link link-primary">
                Zarejestruj się
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="link link-secondary text-sm">
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
