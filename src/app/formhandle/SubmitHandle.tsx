import { Formdata } from "../types";

export default function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  form: Formdata
) {
  e.preventDefault();

  console.log(form);
}
