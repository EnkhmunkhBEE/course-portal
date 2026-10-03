"use client";

import { useState } from "react";
import { Formdata, initialForm } from "../types";
import handleSubmit from "../formhandle/SubmitHandle";

export default function Login() {
   const [form, setForm] = useState<Formdata>(initialForm)



  return (
    <form onSubmit={(e) => handleSubmit(e,form)}>
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

      <input type="submit" value="Submit" />
    </form>
  );
}
