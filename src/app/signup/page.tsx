"use client";

import { useState } from "react";
import { Formdata, initialForm } from "../types";

export default function Sign_up() {
  const [form, setForm] = useState<Formdata>(initialForm);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.password !== form.password_confirm) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Password matched!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Username"
        value={form.username}
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
        required
      />

      <input
        type="email"
        placeholder="Enter email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        required
      />

      <input
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
        required
        minLength={8}
      />

      <input
        type="password"
        placeholder="Confirm password"
        value={form.password_confirm}
        onChange={(e) =>
          setForm({
            ...form,
            password_confirm: e.target.value,
          })
        }
        required
      />

      {error && <p>{error}</p>}

      <input type="submit" value="Submit" />
    </form>
  );
}