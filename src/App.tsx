import React, { useEffect } from "react";
import AppMenu from "./components/AppMenu/AppMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./components/Auth/Auth";
import { useDispatch } from "react-redux";
import Map from "./components/Map/Map";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const localStorageAuth = window.localStorage.getItem("auth");
  useEffect(() => {
    if (localStorageAuth)
      dispatch({
        type: "FETCH_LOGIN_SUCCESS",
        payload: JSON.parse(localStorageAuth),
      });
  }, [dispatch, localStorageAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Map />
              <AppMenu/>
            </div>
          }
        />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
