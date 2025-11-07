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
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <Link
              href="/"
              className="text-2xl font-bold text-primary-content hover:opacity-80 transition-opacity"
            >
              OcenProfesora.pl
            </Link>
            <h1 className="text-3xl font-bold mt-4 text-base-content">
              Logowanie
            </h1>
            <p className="text-base-content opacity-80 mt-2">
              Witaj ponownie! Zaloguj się do swojego konta.
            </p>
          </div>

          {/* Test Credentials Info */}
          <div className="bg-info bg-opacity-10 border border-info rounded-lg p-4 mb-4">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info bg-info-content shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="text-xs text-info-content">
                <div className="font-bold">Testowe dane logowania:</div>
                <div>Email: test@ocenprofesora.pl</div>
                <div>Hasło: test123</div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {blad && (
            <div className="bg-error bg-opacity-10 border border-error rounded-lg p-4 mb-4">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-error shrink-0 h-6 w-6"
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
                <span className="text-error text-sm font-medium">{blad}</span>
              </div>
            </div>
          )}

          {/* Login Form */}
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="input input-bordered bg-base-100 text-base-content w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={ladowanie}
                required
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-medium">Hasło</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered bg-base-100 text-base-content w-full"
                value={haslo}
                onChange={(e) => setHaslo(e.target.value)}
                disabled={ladowanie}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full text-primary-content"
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

          {/* Register Link */}
          <div className="divider">lub</div>
          <div className="text-center">
            <p className="text-sm text-base-content opacity-80">
              Nie masz konta?{" "}
              <Link
                href="/rejestracja"
                className="text-primary-content font-semibold hover:underline"
              >
                Zarejestruj się
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
