import { useCallback, useState } from "react";
import { AuthFormData, InitialState } from "../types/authCard";
import * as api from "../api/auth.api";
import { ReturnedParams } from "../types/useAuthCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";

const useAuthCard = (): ReturnedParams => {
  // hooks //
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states //
  const [authType, setAuthType] = useState<string>("login");
  const [data, setData] = useState<AuthFormData>(InitialState);
  const [errorFetch, setErrorFetch] = useState<string | null>(null);

  // mutates //
  const {mutate: signUp, isLoading: loadingSignUp} = useMutation('sign up', () => api.fetchSignUp(data), {
    onSuccess: ({data}) => {
      if (data.success) {
        setAuthType("login");
        setErrorFetch(null);
        setData(InitialState);
      } else {
        setErrorFetch(data.error)
      }
    }
  });
  
  const {mutate: signIn, isLoading: loadingSignIn} = useMutation('sign in', () => api.fetchSignIn(data), {
    onSuccess: ({data}) => {
      if (data.success) {
        setErrorFetch(null);
        setData(InitialState);
        navigate("/");
        window.localStorage.setItem('auth', JSON.stringify(data));
        dispatch({type: "FETCH_LOGIN_SUCCESS", payload: data})
      } else {
        setErrorFetch(data.error);
      }
    }
  });

  // callbacks //
  const handleSetAuthType = useCallback((type: string) => {
    setAuthType(type);
    setErrorFetch(null);
    setData(InitialState);
  }, []);

  const handleChangeData = useCallback((name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return {
    authType,
    data,
    handleSetAuthType,
    onSignIn: signIn,
    onSignUp: signUp,
    handleChangeData,
    errorFetch,
    setErrorFetch,
    loading: loadingSignIn || loadingSignUp
  };
};

export default useAuthCard;
