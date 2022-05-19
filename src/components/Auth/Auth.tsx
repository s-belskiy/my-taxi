import React from "react";
import AuthCard from "./AuthCard";
import "./scss/Auth.scss"

const AuthPage: React.FC = () => {
  return (
    <div className="authPage">
      <AuthCard />
    </div>
  );
};

export default AuthPage;
