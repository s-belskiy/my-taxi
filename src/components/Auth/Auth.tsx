import React from "react";
import { STYLES } from "./modules/Auth.module";
import AuthCard from "./AuthCard";

const AuthPage: React.FC = () => {
  return (
    <div style={STYLES.container}>
      <AuthCard />
    </div>
  );
};

export default AuthPage;
