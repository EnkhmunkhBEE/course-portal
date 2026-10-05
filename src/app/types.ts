export type Formdata = {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
};

export const initialForm: Formdata = {
  username: "",
  email: "",
  password: "",
  password_confirm: "",
};