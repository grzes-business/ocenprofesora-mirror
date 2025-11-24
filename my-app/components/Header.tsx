"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { zalogowany, user, wyloguj } = useAuth();

  return (
    <header className="navbar bg-base-100 shadow-md border-b border-base-200">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost text-xl font-bold text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
        >
          OcenProfesora.pl
        </Link>
      </div>
      <div className="flex-none gap-2">
        <AnimatePresence mode="wait">
          {zalogowany ? (
            <motion.div
              key="logged-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="dropdown dropdown-end"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar placeholder"
                aria-label="Menu użytkownika"
              >
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="User Avatar"
                    className="drag-none"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-200"
              >
                <li className="menu-title">
                  <span>{user?.imie_wyswietlane || "Użytkownik"}</span>
                </li>
                <li>
                  <Link
                    href="/profil"
                    className="text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dodaj-profesora"
                    className="text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
                  >
                    Dodaj profesora
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dodaj-instytucje"
                    className="text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
                  >
                    Dodaj instytucję
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => wyloguj()}
                    className="text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
                  >
                    Wyloguj
                  </button>
                </li>
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="logged-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-2"
            >
              <Link
                href="/logowanie"
                className="btn btn-ghost text-base-content hover:bg-primary hover:bg-opacity-10 hover:text-primary-content"
              >
                Logowanie
              </Link>
              <Link href="/rejestracja" className="btn btn-primary">
                Rejestracja
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
