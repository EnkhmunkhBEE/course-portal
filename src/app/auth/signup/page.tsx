"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";

import {
  Formdata,
  initialForm,
} from "../../types";

import { auth } from "@/lib/firebase";

export default function Sign_up() {
  const [form, setForm] =
    useState<Formdata>(initialForm);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      form.password !==
      form.password_confirm
    ) {
      setError(
        "Passwords do not match!"
      );

      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      setSuccess(
        "Account created successfully!"
      );

      setTimeout(() => {
        router.push("/Dashboard");
      }, 1000);

    } catch (error: any) {
      console.log(error);

      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        setError(
          "This email is already registered."
        );
      } else if (
        error.code ===
        "auth/weak-password"
      ) {
        setError(
          "Password is too weak."
        );
      } else if (
        error.code ===
        "auth/invalid-email"
      ) {
        setError(
          "Invalid email address."
        );
      } else {
        setError(
          "Something went wrong."
        );
      }
    }
  }

  return (
    <div className="auth-page">
      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <h1>Sign Up</h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username:
                e.target.value,
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
              email:
                e.target.value,
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
              password:
                e.target.value,
            })
          }
          required
          minLength={8}
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={
            form.password_confirm
          }
          onChange={(e) =>
            setForm({
              ...form,
              password_confirm:
                e.target.value,
            })
          }
          required
        />

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        {success && (
          <p>
            {success}
          </p>
        )}

        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}