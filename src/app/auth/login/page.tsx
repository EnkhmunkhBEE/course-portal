"use client";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Sign_up from "../signup/page";
import { Formdata, initialForm } from "../../types";
import { auth } from "@/lib/firebase";

export default function Login() {
  const [form, setForm] =
    useState<Formdata>(initialForm);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      setSuccess("Login successful!");

      router.push("/dashboard");

    } catch (error: any) {
      console.log(error);

      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        setError(
          "Email or password is incorrect."
        );
      } else {
        setError(
          "Login failed. Please try again."
        );
      }
    }
  }

  return (
    <div className="auth-page">
      <form
        className="auth-form"
        onSubmit={handleLogin}
      >
        <h1>Login</h1>

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
          value="Login"
        />
      </form>
      <p>
        <Link href="/auth/signup">Newbie? then sign up</Link>
        
      </p>
    </div>
  );
}