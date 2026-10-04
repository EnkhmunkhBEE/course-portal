"use client";

import { useState, useEffect } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

    useEffect(() => {
        const undes = document.documentElement;
        undes.classList.remove("Dark", "Light")
        undes.classList.add(dark ?  "Dark" : "Light")

    },[dark]
    
    )

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}