import { AuthAction, AuthState, LoginActionTypes } from "../types/authReducer";

const initialState: AuthState = {};

export const authReducer = (state = initialState,action: AuthAction): AuthState => {
  switch (action.type) {
    case LoginActionTypes.FETCH_LOGIN_SUCCESS: {
      return action.payload;
    }
    case LoginActionTypes.FETCH_LOGIN_ERROR: {
      return action.payload;
    }
    default:
      return state;
  }
};
