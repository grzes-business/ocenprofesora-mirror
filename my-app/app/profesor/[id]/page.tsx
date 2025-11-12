"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Profesor, Wpis } from "@/types";
import { mockInstitutions } from "@/lib/data/mockInstitutions";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfesorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { zalogowany, user } = useAuth();
  const [profesor, setProfesor] = useState<Profesor | null>(null);
  const [recenzje, setRecenzje] = useState<Wpis[]>([]);
  const [ladowanie, setLadowanie] = useState(true);
  const [pokazFormularz, setPokazFormularz] = useState(false);
  const [nowaRecenzja, setNowaRecenzja] = useState({
    tresc: "",
    ocena: 5,
  });
  const [wysylanieRecenzji, setWysylanieRecenzji] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchProfesorData(params.id as string);
    }
  }, [params.id]);

  const fetchProfesorData = async (id: string) => {
    setLadowanie(true);
    try {
      const response = await fetch(`/api/professors/${id}`);

      if (!response.ok) {
        setProfesor(null);
        setRecenzje([]);
        return;
      }

      const data = await response.json();

      // API returns professor with instytucje and wpisy directly
      if (data && data.id_profesora) {
        setProfesor(data);
        setRecenzje(data.wpisy || []);
      } else {
        setProfesor(null);
        setRecenzje([]);
      }
    } catch (error) {
      console.error("Error fetching professor:", error);
      setProfesor(null);
      setRecenzje([]);
    } finally {
      setLadowanie(false);
    }
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

  const handleDodajRecenzje = async () => {
    if (!user || !profesor || !nowaRecenzja.tresc.trim()) {
      return;
    }

    setWysylanieRecenzji(true);

    // Create new review locally
    const nowyWpis: Wpis = {
      id_wpisu: `wpis_${Date.now()}`,
      id_user: user.id_user,
      tresc: nowaRecenzja.tresc,
      id_profesora: profesor.id_profesora,
      ocena: nowaRecenzja.ocena,
      data_utworzenia: new Date(),
      imie_studenta: user.imie_wyswietlane || "Anonimowy Student",
    };

    // Add to the beginning of the reviews array
    const noweRecenzje = [nowyWpis, ...recenzje];
    setRecenzje(noweRecenzje);

    // Recalculate average rating
    const sumaOcen = noweRecenzje.reduce((sum, r) => sum + r.ocena, 0);
    const nowaOcena = sumaOcen / noweRecenzje.length;

    setProfesor({
      ...profesor,
      ocena: nowaOcena,
    });

    // Reset form
    setNowaRecenzja({ tresc: "", ocena: 5 });
    setPokazFormularz(false);
    setWysylanieRecenzji(false);

    // Show success message
    alert("Recenzja została dodana pomyślnie!");
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              star <= Math.round(rating)
                ? "fill-yellow-400 stroke-yellow-400"
                : "fill-gray-200 stroke-gray-300"
            }`}
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
    );
  };

  if (ladowanie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!profesor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="navbar bg-white shadow-md border-b border-gray-200">
          <div className="flex-1">
            <Link
              href="/"
              className="btn btn-ghost text-xl font-bold text-primary hover:bg-indigo-50"
            >
              OcenProfesora.pl
            </Link>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-800">
              Nie znaleziono profesora
            </h2>
            <p className="text-red-700 mt-2">
              Profesor o podanym ID nie istnieje.
            </p>
            <Link href="/wynik" className="btn btn-primary mt-4">
              Wróć do wyszukiwania
            </Link>
          </div>
        </div>
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
        <div className="flex-none">
          <Link
            href="/wynik"
            className="btn btn-ghost text-gray-700 hover:bg-indigo-50"
          >
            ← Wróć do wyników
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Professor Info Card */}
        <div className="card bg-white shadow-xl border border-gray-200 mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {profesor.tytul_naukowy} {profesor.imie} {profesor.nazwisko}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {getInstitutionNames(profesor.tab_id_instytucji)}
                </p>
                {profesor.szczegoly && (
                  <p className="text-gray-700 leading-relaxed">
                    {profesor.szczegoly}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center bg-indigo-50 rounded-lg p-6 min-w-[200px]">
                <div className="text-6xl font-bold text-primary mb-2">
                  {profesor.ocena.toFixed(1)}
                </div>
                <div className="mb-2">{renderStars(profesor.ocena)}</div>
                <div className="text-sm text-gray-600">
                  na podstawie {recenzje.length}{" "}
                  {recenzje.length === 1
                    ? "recenzji"
                    : recenzje.length < 5
                    ? "recenzji"
                    : "recenzji"}
                </div>
              </div>
            </div>

            {zalogowany && (
              <div className="mt-6">
                <button
                  onClick={() => setPokazFormularz(true)}
                  className="btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  Dodaj recenzję
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recenzje studentów ({recenzje.length})
          </h2>

          {recenzje.length === 0 ? (
            <div className="card bg-white shadow-md border border-gray-200">
              <div className="card-body">
                <p className="text-gray-600 text-center py-8">
                  Brak recenzji dla tego profesora.{" "}
                  {zalogowany
                    ? "Bądź pierwszy i dodaj swoją opinię!"
                    : "Zaloguj się, aby dodać recenzję."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {recenzje.map((recenzja) => (
                <div
                  key={recenzja.id_wpisu}
                  className="card bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-semibold text-gray-800">
                          {recenzja.imie_studenta || "Użytkownik anonimowy"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(
                            recenzja.data_utworzenia
                          ).toLocaleDateString("pl-PL", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {recenzja.ocena.toFixed(1)}
                        </div>
                        <div className="scale-75">
                          {renderStars(recenzja.ocena)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {recenzja.tresc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Add Review Modal */}
      {pokazFormularz && (
        <div className="modal modal-open">
          <div className="modal-box bg-white max-w-2xl">
            <h3 className="font-bold text-2xl text-gray-800 mb-4">
              Dodaj recenzję dla {profesor?.tytul_naukowy} {profesor?.imie}{" "}
              {profesor?.nazwisko}
            </h3>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Ocena (1-5)
                </span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={nowaRecenzja.ocena}
                  onChange={(e) =>
                    setNowaRecenzja({
                      ...nowaRecenzja,
                      ocena: parseInt(e.target.value),
                    })
                  }
                  className="range range-primary"
                />
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {nowaRecenzja.ocena}
                  </span>
                  <div className="scale-75">
                    {renderStars(nowaRecenzja.ocena)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 px-2 mt-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Twoja opinia
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-white border-gray-300 h-32 text-gray-800 focus:border-primary focus:outline-none"
                placeholder="Podziel się swoją opinią o tym profesorze..."
                value={nowaRecenzja.tresc}
                onChange={(e) =>
                  setNowaRecenzja({ ...nowaRecenzja, tresc: e.target.value })
                }
                maxLength={1000}
              ></textarea>
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  {nowaRecenzja.tresc.length}/1000 znaków
                </span>
              </label>
            </div>

            <div className="modal-action">
              <button
                onClick={() => {
                  setPokazFormularz(false);
                  setNowaRecenzja({ tresc: "", ocena: 5 });
                }}
                className="btn btn-ghost"
                disabled={wysylanieRecenzji}
              >
                Anuluj
              </button>
              <button
                onClick={handleDodajRecenzje}
                className="btn btn-primary"
                disabled={wysylanieRecenzji || !nowaRecenzja.tresc.trim()}
              >
                {wysylanieRecenzji ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Dodawanie...
                  </>
                ) : (
                  "Dodaj recenzję"
                )}
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => {
              if (!wysylanieRecenzji) {
                setPokazFormularz(false);
                setNowaRecenzja({ tresc: "", ocena: 5 });
              }
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
