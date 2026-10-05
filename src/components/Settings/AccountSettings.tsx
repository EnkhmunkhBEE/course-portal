"use client";

import { useState } from "react";

export default function AccountSettings() {
  const [name, setName] = useState("");

  function handleSave() {
    console.log("Name:", name);
    alert("Account settings saved!");
  }

  return (
    <div className="settings-card">
      <h2>Account Settings</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
}