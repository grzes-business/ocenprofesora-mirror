"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function DodajInstytucjePage() {
  const router = useRouter();
  const { zalogowany } = useAuth();
  const [ladowanie, setLadowanie] = useState(false);
  const [sukces, setSukces] = useState(false);

  const [formData, setFormData] = useState({
    nazwa: "",
    miasto: "",
    typ: "",
    strona_www: "",
  });

  useEffect(() => {
    if (!zalogowany) {
      router.push("/logowanie");
    }
  }, [zalogowany, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLadowanie(true);

    // Simulate API call
    setTimeout(() => {
      setSukces(true);
      setLadowanie(false);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          nazwa: "",
          miasto: "",
          typ: "",
          strona_www: "",
        });
        setSukces(false);
      }, 5000);
    }, 1000);
  };

  if (!zalogowany) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-base-content mb-2">
              Dodaj nową instytucję
            </h1>
            <p className="text-base-content mb-6">
              Wypełnij poniższy formularz, aby dodać uczelnię do bazy danych.
            </p>

            {sukces && (
              <div className="bg-success text-success-content bg-opacity-10 border border-success rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-success-content shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">
                    Instytucja została pomyślnie dodana!
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-control flex flex-col mb-4">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Nazwa uczelni <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Uniwersytet Warszawski"
                  className="input input-bordered bg-base-100 text-base-content placeholder:text-base-content"
                  value={formData.nazwa}
                  onChange={(e) =>
                    setFormData({ ...formData, nazwa: e.target.value })
                  }
                  required
                  disabled={ladowanie}
                />
              </div>

              <div className="form-control flex flex-col mb-4">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Miasto <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Warszawa"
                  className="input input-bordered bg-base-100 text-base-content placeholder:text-base-content"
                  value={formData.miasto}
                  onChange={(e) =>
                    setFormData({ ...formData, miasto: e.target.value })
                  }
                  required
                  disabled={ladowanie}
                />
              </div>

              <div className="form-control flex flex-col mb-4">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Typ uczelni <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  className="select select-bordered bg-base-100 text-base-content"
                  value={formData.typ}
                  onChange={(e) =>
                    setFormData({ ...formData, typ: e.target.value })
                  }
                  required
                  disabled={ladowanie}
                >
                  <option value="">Wybierz typ</option>
                  <option value="Uniwersytet">Uniwersytet</option>
                  <option value="Politechnika">Politechnika</option>
                  <option value="Akademia">Akademia</option>
                  <option value="Wyższa Szkoła">Wyższa Szkoła</option>
                  <option value="Uczelnia Artystyczna">
                    Uczelnia Artystyczna
                  </option>
                  <option value="Inne">Inne</option>
                </select>
              </div>

              <div className="form-control flex flex-col mb-6">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Strona WWW
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://www.uczelnia.pl"
                  className="input input-bordered bg-base-100 text-base-content placeholder:text-base-content"
                  value={formData.strona_www}
                  onChange={(e) =>
                    setFormData({ ...formData, strona_www: e.target.value })
                  }
                  disabled={ladowanie}
                />
                <label className="label">
                  <span className="label-text-alt text-base-content">
                    Opcjonalne - dodaj pełny adres URL
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                  disabled={ladowanie}
                >
                  {ladowanie ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Dodawanie...
                    </>
                  ) : (
                    "Dodaj instytucję"
                  )}
                </button>
                <Link href="/profil" className="btn btn-ghost">
                  Anuluj
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
