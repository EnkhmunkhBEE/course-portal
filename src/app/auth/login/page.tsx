"use client";

import { useState } from "react";
import { Formdata, initialForm } from "../../types";
import handleSubmit from "../../formhandle/SubmitHandle";



export default function Page() {
    const [form , setForm] = useState<Formdata>(initialForm)
return (
  <div className="auth-page">
    <form className="auth-form" onSubmit={(e) => handleSubmit(e, form)}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />

      <input
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />

      <input type="submit" value="Login" />
    </form>
  </div>
);


}
