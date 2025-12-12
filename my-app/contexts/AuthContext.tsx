"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, AuthState, LoginCredentials, SignInCredentials } from "@/types";

interface AuthContextType extends AuthState {
  zaloguj: (credentials: LoginCredentials) => Promise<boolean>;
  wyloguj: () => Promise<void>;
  ladowanie: boolean;
  zarejestruj: (credentials: SignInCredentials) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE || "DUMMY";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ladowanie, setLadowanie] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const zalogowanyFlag = localStorage.getItem("zalogowany");
    const email = localStorage.getItem("email");

    if (zalogowanyFlag === "true" && email) {
      const restoredUser: User = {
        id_user: "test-user-1",
        email: email,
        kierunek: "Informatyka",
        tab_id_instytucji: ["inst_1"],
        imie_wyswietlane: "Test User",
        bio: "Student testowy",
        zweryfikowany: true,
      };
      setUser(restoredUser);
    }

    setLadowanie(false);
  }, []);

  // const zalogujDummy = async (
  //   credentials: LoginCredentials
  // ): Promise<boolean> => {
  //   // Simple localStorage-based authentication for development
  //   // Check if credentials match test credentials
  //   if (
  //     credentials.email === "test@ocenprofesora.pl" &&
  //     credentials.password === "test123"
  //   ) {
  //     const testUser: User = {
  //       id_user: "test-user-1",
  //       email: "test@ocenprofesora.pl",
  //       kierunek: "Informatyka",
  //       tab_id_instytucji: ["inst_1"],
  //       imie_wyswietlane: "Test User",
  //       bio: "Student testowy",
  //       zweryfikowany: true,
  //     };

  //     setUser(testUser);
  //     localStorage.setItem("zalogowany", "true");
  //     return true;
  //   }

  //   return false;
  // };

  const zaloguj = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // TODO: to będzie kiedyś do poprawy I guess... - jak narazie taka logika tylko po to by logowanie/rejestracja jakkolwiek działały

      const testUser: User = {
        id_user: "test-user-1",
        email: data.email,
        kierunek: "Informatyka",
        tab_id_instytucji: ["inst_1"],
        imie_wyswietlane: "Test User",
        bio: "Student testowy",
        zweryfikowany: true,
      };

      if (data.token && data.email) {
        setUser(testUser);
        localStorage.setItem("zalogowany", "true");
        localStorage.setItem("email", data.email);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const zarejestruj = async (
    credentials: SignInCredentials
  ): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // TODO: to będzie kiedyś do poprawy I guess... - jak narazie taka logika tylko po to by logowanie/rejestracja jakkolwiek działały

      const testUser: User = {
        id_user: "test-user-1",
        email: data.email,
        kierunek: "Informatyka",
        tab_id_instytucji: ["inst_1"],
        imie_wyswietlane: "Test User",
        bio: "Student testowy",
        zweryfikowany: true,
      };

      if (data.token) {
        setUser(testUser);
        localStorage.setItem("zalogowany", "true");
        localStorage.setItem("email", data.email);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const wyloguj = async () => {
    // Call logout API to clear the cookie
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    setUser(null);
    localStorage.removeItem("zalogowany");
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        zalogowany: !!user,
        zaloguj,
        wyloguj,
        ladowanie,
        zarejestruj,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Utility function to clear authentication (for debugging/testing)
// You can call this from browser console: window.clearAuth()
if (typeof window !== "undefined") {
  (window as any).clearAuth = () => {
    localStorage.removeItem("zalogowany");
    console.log("Authentication cleared. Please refresh the page.");
  };
}
