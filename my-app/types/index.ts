// Instytucja (Institution)
export interface Instytucja {
  id_instytucji: string;
  nazwa: string;
}

// Profesor (Professor)
export interface Profesor {
  id_profesora: string;
  imie: string;
  nazwisko: string;
  tytul_naukowy?: string;
  szczegoly?: string;
  ocena: number; // Average grade (1-5)
  tab_id_instytucji: string[]; // Array of institution IDs
}

// Wpis (Review/Entry)
export interface Wpis {
  id_wpisu: string;
  id_user: string;
  tresc: string; // Content of the review
  id_profesora: string;
  ocena: number; // Grade (1-5)
  data_utworzenia: Date;
  imie_studenta?: string; // Display name for the review
}

// User
export interface User {
  id_user: string;
  email: string;
  haslo?: string; // Password (won't be sent to frontend in real app)
  kierunek: string; // Field of study (can be multiple, comma-separated)
  tab_id_instytucji: string[]; // Array of institution IDs
  imie_wyswietlane?: string; // Display name for public profile
  bio?: string;
  zweryfikowany: boolean; // Verified user status
}

// Additional types for API responses and forms
export interface ProfessorWithDetails extends Profesor {
  instytucje: Instytucja[]; // Populated institutions
  wpisy: Wpis[]; // Reviews
}

export interface SearchResult {
  profesorowie: Profesor[];
  znaleziono: number;
}

export interface LoginCredentials {
  email: string;
  haslo: string;
}

export interface RegisterData {
  email: string;
  haslo: string;
  kierunek: string;
  tab_id_instytucji: string[];
  imie_wyswietlane?: string;
}

export interface AuthState {
  user: User | null;
  zalogowany: boolean; // Logged in status
}
