import { AuthFormData } from "./authCard";

export type ReturnedParams = {
  authType: string,
  data: AuthFormData,
  handleSetAuthType: (type: string) => void,
  onSignUp: () => void,
  onSignIn: () => void,
  handleChangeData: (
    email: string,
    password: string,
    name?: string,
    surname?: string
  ) => void,
  errorFetch: string | null,
  setErrorFetch: (error: string | null) => void,
  loading: boolean,
};
