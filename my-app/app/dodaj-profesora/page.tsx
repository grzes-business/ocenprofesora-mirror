"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { mockInstitutions } from "@/lib/data/mockInstitutions";

export default function DodajProfesoraPage() {
  const router = useRouter();
  const { zalogowany } = useAuth();
  const [ladowanie, setLadowanie] = useState(false);
  const [sukces, setSukces] = useState(false);

  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    tytul_naukowy: "",
    szczegoly: "",
    tab_id_instytucji: [] as string[],
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
          imie: "",
          nazwisko: "",
          tytul_naukowy: "",
          szczegoly: "",
          tab_id_instytucji: [],
        });
        setSukces(false);
      }, 2000);
    }, 1000);
  };

  const handleInstitutionToggle = (instId: string) => {
    setFormData((prev) => ({
      ...prev,
      tab_id_instytucji: prev.tab_id_instytucji.includes(instId)
        ? prev.tab_id_instytucji.filter((id) => id !== instId)
        : [...prev.tab_id_instytucji, instId],
    }));
  };

  if (!zalogowany) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

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
        <div className="flex-none gap-2">
          <Link
            href="/profil"
            className="btn btn-ghost text-gray-700 hover:bg-indigo-50"
          >
            ← Profil
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="card bg-white shadow-xl border border-gray-200">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Dodaj nowego profesora
            </h1>
            <p className="text-gray-600 mb-6">
              Wypełnij poniższy formularz, aby dodać profesora do bazy danych.
            </p>

            {sukces && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-green-600 shrink-0 h-6 w-6"
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
                  <span className="text-green-800 font-medium">
                    Profesor został pomyślnie dodany!
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Imię <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Jan"
                  className="input input-bordered bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.imie}
                  onChange={(e) =>
                    setFormData({ ...formData, imie: e.target.value })
                  }
                  required
                  disabled={ladowanie}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Nazwisko <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Kowalski"
                  className="input input-bordered bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.nazwisko}
                  onChange={(e) =>
                    setFormData({ ...formData, nazwisko: e.target.value })
                  }
                  required
                  disabled={ladowanie}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Tytuł naukowy
                  </span>
                </label>
                <select
                  className="select select-bordered bg-white text-gray-900"
                  value={formData.tytul_naukowy}
                  onChange={(e) =>
                    setFormData({ ...formData, tytul_naukowy: e.target.value })
                  }
                  disabled={ladowanie}
                >
                  <option value="">Wybierz tytuł</option>
                  <option value="mgr">mgr</option>
                  <option value="dr">dr</option>
                  <option value="dr hab.">dr hab.</option>
                  <option value="prof. dr hab.">prof. dr hab.</option>
                </select>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Uczelnie <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="space-y-2 p-4 border-2 border-gray-200 rounded-lg bg-white max-h-48 overflow-y-auto">
                  {mockInstitutions.map((inst) => (
                    <label
                      key={inst.id_instytucji}
                      className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-3 rounded-lg transition-colors border border-transparent hover:border-indigo-200"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={formData.tab_id_instytucji.includes(
                          inst.id_instytucji
                        )}
                        onChange={() =>
                          handleInstitutionToggle(inst.id_instytucji)
                        }
                        disabled={ladowanie}
                      />
                      <span className="text-gray-800 font-medium">
                        {inst.nazwa}
                      </span>
                    </label>
                  ))}
                </div>
                {formData.tab_id_instytucji.length === 0 && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      Wybierz przynajmniej jedną uczelnie
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Dodatkowe informacje
                  </span>
                </label>
                <textarea
                  placeholder="Np. specjalizacja, przedmioty, dodatkowe informacje..."
                  className="textarea textarea-bordered h-24 bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.szczegoly}
                  onChange={(e) =>
                    setFormData({ ...formData, szczegoly: e.target.value })
                  }
                  disabled={ladowanie}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                  disabled={
                    ladowanie || formData.tab_id_instytucji.length === 0
                  }
                >
                  {ladowanie ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Dodawanie...
                    </>
                  ) : (
                    "Dodaj profesora"
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
