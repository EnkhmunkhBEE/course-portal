import React from "react";
import { Formdata } from "../types";

export default function Match(
  e: React.FormEvent<HTMLFormElement>,
  form: Formdata
) {
  e.preventDefault();

  if (form.password !== form.password_confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert("Password matched!");
}