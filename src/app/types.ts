 export type Formdata = {
  username: string;
  password: string;
  password_confirm : string;
  email: string;
};
export const initialForm: Formdata = {
  username: "",
  password: "",
  password_confirm : "",
  email: "",
};