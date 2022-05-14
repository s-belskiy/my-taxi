export type AuthState = {
    success?: boolean;
    error?: string;
    token?: string;
};

export enum LoginActionTypes {
  FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS",
  FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR",
}

type fetchLoginSuccess = {
  type: LoginActionTypes.FETCH_LOGIN_SUCCESS;
  payload: { success: boolean; token: string };
};

type fetchLoginError = {
  type: LoginActionTypes.FETCH_LOGIN_ERROR;
  payload: { success: boolean; error: string };
};

export type AuthAction = fetchLoginSuccess | fetchLoginError;
