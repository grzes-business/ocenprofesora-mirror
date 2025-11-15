'use client';

import { useEffect } from 'react';

export default function ThemeLoader() {
  useEffect(() => {
    // This runs on the client to ensure theme is loaded from localStorage
    const savedTheme = localStorage.getItem('theme') || 'wireframe';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return null;
}
