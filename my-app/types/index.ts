// Instytucja (Institution)
export interface Instytucja {
  id_instytucji: string;
  nazwa: string;
}

// Profesor (Professor)
export interface Profesor {
  id: string;
  name: string;
  surname: string;
  degree?: string;
  reviews: Wpis[];
  szczegoly?: string;
  ocena?: number; // Average grade (1-5)
  tab_id_instytucji?: string[]; // Array of institution IDs
}

// Wpis (Review/Entry)
export interface Wpis {
  id: string;
  content: string; // Content of the review
  ratio: number; // Grade (1-5)
  userId: string;
  professorId: string;
  created_at: Date;
  updated_at: Date;
}

// User
export interface User {
  id_user: string;
  email: string;
  password?: string; // Password (won't be sent to frontend in real app)
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
  password: string;
}

export interface SignInCredentials {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  kierunek: string;
  tab_id_instytucji: string[];
  imie_wyswietlane?: string;
}

export interface AuthState {
  user: User | null;
  zalogowany: boolean; // Logged in status
}
