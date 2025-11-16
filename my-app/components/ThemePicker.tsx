"use client";

import { useEffect, useState } from "react";

const DAISYUI_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function ThemePicker() {
  const [currentTheme, setCurrentTheme] = useState("wireframe");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme") || "wireframe";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // Close the dropdown by removing focus
    const activeElement = document.activeElement as HTMLElement;
    activeElement?.blur();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="dropdown dropdown-top dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-primary shadow-lg"
          aria-label="Wybierz motyw"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-2xl max-h-96 overflow-y-auto flex-nowrap"
        >
          <li className="menu-title">
            <span>Wybierz motyw</span>
          </li>
          {DAISYUI_THEMES.map((theme) => (
            <li key={theme}>
              <button
                onClick={() => handleThemeChange(theme)}
                className={currentTheme === theme ? "active" : ""}
              >
                <span className="flex-1 capitalize">{theme}</span>
                {currentTheme === theme && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
