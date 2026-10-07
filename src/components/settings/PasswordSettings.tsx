"use client";

import { useState } from "react";

export default function PasswordSettings() {
  const [password, setPassword] = useState("");

  function handleSave() {
    console.log("Password:", password);
    alert("Account settings saved!");
  }

  return (
    <div className="settings-card">
      <h2>Password change</h2>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
}