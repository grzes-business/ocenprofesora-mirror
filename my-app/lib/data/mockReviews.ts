import { Wpis } from "@/types";

export const mockReviews: Wpis[] = [
  // Reviews for Prof. Anna Kowalska (prof_1)
  {
    id_wpisu: "wpis_1",
    id_user: "user_1",
    tresc:
      "Świetny wykładowca! Wszystko jasno tłumaczy i zawsze chętnie odpowiada na pytania.",
    id_profesora: "prof_1",
    ocena: 5,
    data_utworzenia: new Date("2024-10-15"),
    imie_studenta: "Student A.",
  },
  {
    id_wpisu: "wpis_2",
    id_user: "user_2",
    tresc: "Bardzo wymagająca, ale dzięki temu wiele się nauczyłem. Polecam!",
    id_profesora: "prof_1",
    ocena: 4,
    data_utworzenia: new Date("2024-09-20"),
    imie_studenta: "Student B.",
  },
  {
    id_wpisu: "wpis_3",
    id_user: "user_3",
    tresc:
      "Profesjonalne podejście do nauczania. Egzaminy są trudne ale sprawiedliwe.",
    id_profesora: "prof_1",
    ocena: 5,
    data_utworzenia: new Date("2024-08-10"),
    imie_studenta: "Student C.",
  },

  // Reviews for Prof. Jan Nowak (prof_2)
  {
    id_wpisu: "wpis_4",
    id_user: "user_1",
    tresc:
      "Dobre wykłady, chociaż czasami mogłoby być więcej przykładów praktycznych.",
    id_profesora: "prof_2",
    ocena: 4,
    data_utworzenia: new Date("2024-10-01"),
    imie_studenta: "Student A.",
  },
  {
    id_wpisu: "wpis_5",
    id_user: "user_4",
    tresc: "Pomocny podczas konsultacji. Polecam jego zajęcia z fizyki.",
    id_profesora: "prof_2",
    ocena: 5,
    data_utworzenia: new Date("2024-09-15"),
    imie_studenta: "Student D.",
  },

  // Reviews for Prof. Maria Wiśniewska (prof_3)
  {
    id_wpisu: "wpis_6",
    id_user: "user_2",
    tresc:
      "Najlepszy profesor informatyki jakiego miałem! Pasjonująco prowadzi zajęcia.",
    id_profesora: "prof_3",
    ocena: 5,
    data_utworzenia: new Date("2024-10-20"),
    imie_studenta: "Student B.",
  },
  {
    id_wpisu: "wpis_7",
    id_user: "user_5",
    tresc: "Świetnie tłumaczy skomplikowane algorytmy. Bardzo kompetentna.",
    id_profesora: "prof_3",
    ocena: 5,
    data_utworzenia: new Date("2024-09-25"),
    imie_studenta: "Student E.",
  },

  // Reviews for Prof. Piotr Wójcik (prof_4)
  {
    id_wpisu: "wpis_8",
    id_user: "user_3",
    tresc: "Wykłady są ciekawe, ale materiał jest bardzo trudny.",
    id_profesora: "prof_4",
    ocena: 4,
    data_utworzenia: new Date("2024-10-05"),
    imie_studenta: "Student C.",
  },
  {
    id_wpisu: "wpis_9",
    id_user: "user_6",
    tresc: "Wymaga dużo pracy własnej, ale warto. Dużo się nauczyłem.",
    id_profesora: "prof_4",
    ocena: 4,
    data_utworzenia: new Date("2024-08-30"),
    imie_studenta: "Student F.",
  },

  // Reviews for Prof. Katarzyna Kamińska (prof_5)
  {
    id_wpisu: "wpis_10",
    id_user: "user_4",
    tresc:
      "Bardzo zaangażowana w pracę ze studentami. Polecam zajęcia laboratoryjne!",
    id_profesora: "prof_5",
    ocena: 5,
    data_utworzenia: new Date("2024-10-12"),
    imie_studenta: "Student D.",
  },
  {
    id_wpisu: "wpis_11",
    id_user: "user_1",
    tresc: "Dobrze prowadzi wykłady. Materiał jest przystępnie przedstawiony.",
    id_profesora: "prof_5",
    ocena: 4,
    data_utworzenia: new Date("2024-09-08"),
    imie_studenta: "Student A.",
  },

  // Reviews for Prof. Tomasz Lewandowski (prof_6)
  {
    id_wpisu: "wpis_12",
    id_user: "user_5",
    tresc: "Fascynujące wykłady z historii. Ma ogromną wiedzę.",
    id_profesora: "prof_6",
    ocena: 5,
    data_utworzenia: new Date("2024-10-18"),
    imie_studenta: "Student E.",
  },
  {
    id_wpisu: "wpis_13",
    id_user: "user_2",
    tresc: "Czasami wykłady są monotonne, ale treść jest bardzo dobra.",
    id_profesora: "prof_6",
    ocena: 4,
    data_utworzenia: new Date("2024-09-22"),
    imie_studenta: "Student B.",
  },

  // Reviews for Prof. Agnieszka Zielińska (prof_7)
  {
    id_wpisu: "wpis_14",
    id_user: "user_6",
    tresc:
      "Świetna wykładowczyni! Zajęcia z literatury są bardzo interesujące.",
    id_profesora: "prof_7",
    ocena: 5,
    data_utworzenia: new Date("2024-10-22"),
    imie_studenta: "Student F.",
  },
  {
    id_wpisu: "wpis_15",
    id_user: "user_3",
    tresc:
      "Wymaga dużo czytania, ale warto. Otwiera umysł na nowe interpretacje.",
    id_profesora: "prof_7",
    ocena: 4,
    data_utworzenia: new Date("2024-09-17"),
    imie_studenta: "Student C.",
  },

  // Reviews for Prof. Michał Szymański (prof_8)
  {
    id_wpisu: "wpis_16",
    id_user: "user_4",
    tresc: "Wykłady mogłyby być bardziej przejrzyste. Czasami trudno nadążyć.",
    id_profesora: "prof_8",
    ocena: 3,
    data_utworzenia: new Date("2024-10-08"),
    imie_studenta: "Student D.",
  },
  {
    id_wpisu: "wpis_17",
    id_user: "user_5",
    tresc:
      "Dobry praktyk, ale jako wykładowca mógłby lepiej organizować materiał.",
    id_profesora: "prof_8",
    ocena: 4,
    data_utworzenia: new Date("2024-09-11"),
    imie_studenta: "Student E.",
  },

  // Reviews for Prof. Magdalena Dąbrowska (prof_9)
  {
    id_wpisu: "wpis_18",
    id_user: "user_1",
    tresc:
      "Fantastyczna! Każde zajęcia to przyjemność. Bardzo empatyczna osoba.",
    id_profesora: "prof_9",
    ocena: 5,
    data_utworzenia: new Date("2024-10-25"),
    imie_studenta: "Student A.",
  },
  {
    id_wpisu: "wpis_19",
    id_user: "user_6",
    tresc:
      "Świetnie łączy teorię z praktyką. Polecam wszystkim studentom psychologii!",
    id_profesora: "prof_9",
    ocena: 5,
    data_utworzenia: new Date("2024-09-28"),
    imie_studenta: "Student F.",
  },

  // Reviews for Prof. Paweł Kowalczyk (prof_10)
  {
    id_wpisu: "wpis_20",
    id_user: "user_2",
    tresc: "Solidny wykładowca. Materiał jest dobrze przedstawiony.",
    id_profesora: "prof_10",
    ocena: 4,
    data_utworzenia: new Date("2024-10-14"),
    imie_studenta: "Student B.",
  },
  {
    id_wpisu: "wpis_21",
    id_user: "user_3",
    tresc: "Wymaga dużo pracy, ale wykłady są na wysokim poziomie.",
    id_profesora: "prof_10",
    ocena: 5,
    data_utworzenia: new Date("2024-09-19"),
    imie_studenta: "Student C.",
  },
];
