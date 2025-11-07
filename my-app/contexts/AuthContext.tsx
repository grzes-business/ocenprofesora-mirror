"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, AuthState, LoginCredentials } from "@/types";

interface AuthContextType extends AuthState {
  zaloguj: (credentials: LoginCredentials) => Promise<boolean>;
  wyloguj: () => void;
  ladowanie: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE || "DUMMY";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ladowanie, setLadowanie] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const zalogowanyFlag = localStorage.getItem("zalogowany");

    if (storedUser && zalogowanyFlag === "true") {
      setUser(JSON.parse(storedUser));
    }

    setLadowanie(false);
  }, []);

  const zalogujDummy = async (
    credentials: LoginCredentials
  ): Promise<boolean> => {
    // Simple localStorage-based authentication for development
    // Check if credentials match test credentials
    if (
      credentials.email === "test@ocenprofesora.pl" &&
      credentials.haslo === "test123"
    ) {
      const testUser: User = {
        id_user: "test-user-1",
        email: "test@ocenprofesora.pl",
        kierunek: "Informatyka",
        tab_id_instytucji: ["inst_1"],
        imie_wyswietlane: "Test User",
        bio: "Student testowy",
        zweryfikowany: true,
      };

      setUser(testUser);
      localStorage.setItem("user", JSON.stringify(testUser));
      localStorage.setItem("zalogowany", "true");
      return true;
    }

    return false;
  };

  const zalogujAPI = async (
    credentials: LoginCredentials
  ): Promise<boolean> => {
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

      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("zalogowany", "true");
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const zaloguj = DATA_SOURCE === "DUMMY" ? zalogujDummy : zalogujAPI;

  const wyloguj = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("zalogowany");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        zalogowany: !!user,
        zaloguj,
        wyloguj,
        ladowanie,
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
    localStorage.removeItem("user");
    localStorage.removeItem("zalogowany");
    console.log("Authentication cleared. Please refresh the page.");
  };
}
