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

  // Reviews for Prof. Joanna Woźniak (prof_11)
  {
    id_wpisu: "wpis_22",
    id_user: "user_1",
    tresc:
      "Dobra wykładowczyni ekonomii. Tłumaczy skomplikowane zagadnienia w prosty sposób.",
    id_profesora: "prof_11",
    ocena: 4,
    data_utworzenia: new Date("2024-10-16"),
    imie_studenta: "Student A.",
  },
  {
    id_wpisu: "wpis_23",
    id_user: "user_4",
    tresc: "Wymagająca, ale uczciwa. Egzaminy na odpowiednim poziomie.",
    id_profesora: "prof_11",
    ocena: 4,
    data_utworzenia: new Date("2024-09-21"),
    imie_studenta: "Student D.",
  },

  // Reviews for Prof. Krzysztof Mazur (prof_12)
  {
    id_wpisu: "wpis_24",
    id_user: "user_5",
    tresc:
      "Filozofia nigdy nie była tak fascynująca! Świetnie prowadzi dyskusje.",
    id_profesora: "prof_12",
    ocena: 5,
    data_utworzenia: new Date("2024-10-23"),
    imie_studenta: "Student E.",
  },
  {
    id_wpisu: "wpis_25",
    id_user: "user_6",
    tresc: "Wymaga dużo myślenia abstrakcyjnego, ale warto. Polecam!",
    id_profesora: "prof_12",
    ocena: 4,
    data_utworzenia: new Date("2024-09-26"),
    imie_studenta: "Student F.",
  },

  // Reviews for Prof. Ewa Krawczyk (prof_13)
  {
    id_wpisu: "wpis_26",
    id_user: "user_2",
    tresc:
      "Architektura to jej pasja i to widać na zajęciach. Bardzo inspirująca!",
    id_profesora: "prof_13",
    ocena: 5,
    data_utworzenia: new Date("2024-10-19"),
    imie_studenta: "Student B.",
  },
  {
    id_wpisu: "wpis_27",
    id_user: "user_3",
    tresc:
      "Świetne projekty do wykonania. Uczę się bardzo dużo praktycznych umiejętności.",
    id_profesora: "prof_13",
    ocena: 5,
    data_utworzenia: new Date("2024-09-24"),
    imie_studenta: "Student C.",
  },

  // Reviews for Prof. Andrzej Piotrowski (prof_14)
  {
    id_wpisu: "wpis_28",
    id_user: "user_4",
    tresc: "Dobre wykłady z geologii. Czasami materiał jest trudny.",
    id_profesora: "prof_14",
    ocena: 4,
    data_utworzenia: new Date("2024-10-11"),
    imie_studenta: "Student D.",
  },
  {
    id_wpisu: "wpis_29",
    id_user: "user_6",
    tresc: "Interesujące zajęcia terenowe. Profesjonalne podejście.",
    id_profesora: "prof_14",
    ocena: 4,
    data_utworzenia: new Date("2024-09-13"),
    imie_studenta: "Student F.",
  },

  // Reviews for Prof. Barbara Grabowska (prof_15)
  {
    id_wpisu: "wpis_30",
    id_user: "user_1",
    tresc:
      "Socjologia stała się moim ulubionym przedmiotem dzięki niej. Świetna!",
    id_profesora: "prof_15",
    ocena: 5,
    data_utworzenia: new Date("2024-10-21"),
    imie_studenta: "Student A.",
  },
  {
    id_wpisu: "wpis_31",
    id_user: "user_5",
    tresc: "Prowadzi ciekawe badania i chętnie dzieli się swoją wiedzą.",
    id_profesora: "prof_15",
    ocena: 5,
    data_utworzenia: new Date("2024-09-27"),
    imie_studenta: "Student E.",
  },

  // Reviews for Prof. Marcin Kaczmarek (prof_16)
  {
    id_wpisu: "wpis_32",
    id_user: "user_7",
    tresc:
      "Najlepszy profesor prawa! Jego wykłady są niezwykle merytoryczne i przystępne.",
    id_profesora: "prof_16",
    ocena: 5,
    data_utworzenia: new Date("2024-10-28"),
    imie_studenta: "Student G.",
  },
  {
    id_wpisu: "wpis_33",
    id_user: "user_8",
    tresc: "Wymaga dużo, ale wartościowe zajęcia. Dużo się uczę.",
    id_profesora: "prof_16",
    ocena: 5,
    data_utworzenia: new Date("2024-10-03"),
    imie_studenta: "Student H.",
  },
  {
    id_wpisu: "wpis_34",
    id_user: "user_7",
    tresc:
      "Świetnie przygotowuje do egzaminów zawodowych. Ma ogromne doświadczenie praktyczne.",
    id_profesora: "prof_16",
    ocena: 5,
    data_utworzenia: new Date("2024-09-14"),
    imie_studenta: "Student G.",
  },

  // Reviews for Prof. Dorota Jankowska (prof_17)
  {
    id_wpisu: "wpis_35",
    id_user: "user_8",
    tresc:
      "Biologia ewolucyjna nigdy nie była tak fascynująca! Polecam wszystkim.",
    id_profesora: "prof_17",
    ocena: 5,
    data_utworzenia: new Date("2024-10-26"),
    imie_studenta: "Student H.",
  },
  {
    id_wpisu: "wpis_36",
    id_user: "user_1",
    tresc:
      "Świetna wykładowczyni. Jasno przedstawia trudne zagadnienia genetyki.",
    id_profesora: "prof_17",
    ocena: 5,
    data_utworzenia: new Date("2024-09-30"),
    imie_studenta: "Student A.",
  },

  // Reviews for Prof. Grzegorz Witkowski (prof_18)
  {
    id_wpisu: "wpis_37",
    id_user: "user_9",
    tresc: "Świetny praktyk! Dużo uczę się o prawdziwej pracy programisty.",
    id_profesora: "prof_18",
    ocena: 4,
    data_utworzenia: new Date("2024-10-29"),
    imie_studenta: "Student I.",
  },
  {
    id_wpisu: "wpis_38",
    id_user: "user_2",
    tresc: "Bazy danych nie są już dla mnie tajemnicą. Dobry wykładowca.",
    id_profesora: "prof_18",
    ocena: 5,
    data_utworzenia: new Date("2024-10-07"),
    imie_studenta: "Student B.",
  },

  // Reviews for Prof. Aleksandra Sikora (prof_19)
  {
    id_wpisu: "wpis_39",
    id_user: "user_10",
    tresc:
      "Farmakologia to trudny przedmiot, ale pani profesor świetnie go prowadzi.",
    id_profesora: "prof_19",
    ocena: 5,
    data_utworzenia: new Date("2024-10-24"),
    imie_studenta: "Student J.",
  },
  {
    id_wpisu: "wpis_40",
    id_user: "user_8",
    tresc: "Bardzo wymagająca, ale uczciwa. Dużo się uczę.",
    id_profesora: "prof_19",
    ocena: 4,
    data_utworzenia: new Date("2024-09-29"),
    imie_studenta: "Student H.",
  },

  // Reviews for Prof. Robert Nowicki (prof_20)
  {
    id_wpisu: "wpis_41",
    id_user: "user_11",
    tresc:
      "Oceanografia to fascynujący przedmiot dzięki profesorowi Nowickiemu!",
    id_profesora: "prof_20",
    ocena: 5,
    data_utworzenia: new Date("2024-10-30"),
    imie_studenta: "Student K.",
  },
  {
    id_wpisu: "wpis_42",
    id_user: "user_9",
    tresc: "Świetne wycieczki terenowe i praktyczne zajęcia laboratoryjne.",
    id_profesora: "prof_20",
    ocena: 5,
    data_utworzenia: new Date("2024-10-04"),
    imie_studenta: "Student I.",
  },
  {
    id_wpisu: "wpis_43",
    id_user: "user_11",
    tresc: "Ma ogromne doświadczenie badawcze. Inspiruje do dalszych studiów.",
    id_profesora: "prof_20",
    ocena: 5,
    data_utworzenia: new Date("2024-09-16"),
    imie_studenta: "Student K.",
  },

  // Reviews for Prof. Izabela Krajewska (prof_21)
  {
    id_wpisu: "wpis_44",
    id_user: "user_12",
    tresc:
      "Filologia polska to moja pasja dzięki pani profesor. Świetne zajęcia!",
    id_profesora: "prof_21",
    ocena: 4,
    data_utworzenia: new Date("2024-10-27"),
    imie_studenta: "Student L.",
  },
  {
    id_wpisu: "wpis_45",
    id_user: "user_5",
    tresc: "Dobre wykłady z językoznawstwa. Czasami materiał jest trudny.",
    id_profesora: "prof_21",
    ocena: 4,
    data_utworzenia: new Date("2024-10-02"),
    imie_studenta: "Student E.",
  },

  // Reviews for Prof. Sebastian Olszewski (prof_22)
  {
    id_wpisu: "wpis_46",
    id_user: "user_10",
    tresc:
      "Astrofizyka stała się moim ulubionym przedmiotem! Fascynujące wykłady.",
    id_profesora: "prof_22",
    ocena: 5,
    data_utworzenia: new Date("2024-10-31"),
    imie_studenta: "Student J.",
  },
  {
    id_wpisu: "wpis_47",
    id_user: "user_3",
    tresc: "Świetnie tłumaczy skomplikowane zagadnienia kosmologii.",
    id_profesora: "prof_22",
    ocena: 5,
    data_utworzenia: new Date("2024-10-06"),
    imie_studenta: "Student C.",
  },
  {
    id_wpisu: "wpis_48",
    id_user: "user_11",
    tresc: "Profesjonalny wykładowca z ogromną wiedzą. Polecam jego seminaria!",
    id_profesora: "prof_22",
    ocena: 4,
    data_utworzenia: new Date("2024-09-18"),
    imie_studenta: "Student K.",
  },
];
