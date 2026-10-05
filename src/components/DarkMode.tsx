"use client";

import { useState, useEffect } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved theme once
  useEffect(() => {
    setDark(localStorage.getItem("theme") === "Dark");
    setMounted(true);
  }, []);

  // Apply + save whenever it changes
  useEffect(() => {
    if (!mounted) return; // don't overwrite the saved value with the default
    const root = document.documentElement;
    root.classList.remove("Dark", "Light");
    root.classList.add(dark ? "Dark" : "Light");
    localStorage.setItem("theme", dark ? "Dark" : "Light");
  }, [dark, mounted]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}