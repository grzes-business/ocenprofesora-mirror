import { User } from "@/types";

export const mockUsers: User[] = [
  {
    id_user: "user_1",
    email: "jan.student@example.com",
    haslo: "haslo123", // In real app, this would be hashed
    kierunek: "Informatyka",
    tab_id_instytucji: ["inst_2"],
    imie_wyswietlane: "Student A.",
    zweryfikowany: true,
  },
  {
    id_user: "user_2",
    email: "anna.kowalska@example.com",
    haslo: "haslo123",
    kierunek: "Matematyka",
    tab_id_instytucji: ["inst_1"],
    imie_wyswietlane: "Student B.",
    zweryfikowany: true,
  },
  {
    id_user: "user_3",
    email: "piotr.nowak@example.com",
    haslo: "haslo123",
    kierunek: "Chemia",
    tab_id_instytucji: ["inst_3"],
    imie_wyswietlane: "Student C.",
    zweryfikowany: true,
  },
  {
    id_user: "user_4",
    email: "maria.test@example.com",
    haslo: "haslo123",
    kierunek: "Fizyka",
    tab_id_instytucji: ["inst_2"],
    imie_wyswietlane: "Student D.",
    zweryfikowany: true,
  },
  {
    id_user: "user_5",
    email: "tomasz.wisniewski@example.com",
    haslo: "haslo123",
    kierunek: "Historia",
    tab_id_instytucji: ["inst_1"],
    imie_wyswietlane: "Student E.",
    zweryfikowany: true,
  },
  {
    id_user: "user_6",
    email: "katarzyna.zielinska@example.com",
    haslo: "haslo123",
    kierunek: "Psychologia",
    tab_id_instytucji: ["inst_1"],
    imie_wyswietlane: "Student F.",
    zweryfikowany: true,
  },
];

// Default mock user for login testing
export const MOCK_USER_CREDENTIALS = {
  email: "test@ocenprofesora.pl",
  haslo: "test123",
};
