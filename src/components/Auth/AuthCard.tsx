import React from "react";
import { STYLES, SPRING_STYLES } from "./modules/AuthCard.module";
import { Alert, Button, Card, CardContent, CardHeader } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAuthCard from "./hooks/useAuthCard";
import { useNavigate } from "react-router-dom";
import Loader from "../Layouts/Loader/Loader";
import { useSpring, animated } from "react-spring";

const AuthCard: React.FC = () => {
  // hooks //
  const navigate = useNavigate();
  const {
    authType,
    data,
    handleSetAuthType,
    onSignUp,
    handleChangeData,
    errorFetch,
    setErrorFetch,
    loading,
    onSignIn
  } = useAuthCard();

// react spring // 
  const springProps = useSpring(SPRING_STYLES.card);

  return (
    <animated.div style={{...springProps}}>
      <Card style={STYLES.card}>
        {loading && <Loader />}
        <Button
          onClick={() => navigate("/")}
          style={STYLES.button}
          variant="contained"
        >
          <ArrowBackIcon />
        </Button>

        <CardHeader
          style={STYLES.header}
          title={authType === "login" ? "Вход" : "Регистрация"}
        />
        <CardContent style={STYLES.content}>
          {authType === "login" ? (
            <LoginForm
              data={data}
              onSignIn={onSignIn}
              handleChangeData={handleChangeData}
              onChangeAuthType={handleSetAuthType}
            />
          ) : (
            <RegisterForm
              onSignUp={onSignUp}
              data={data}
              handleChangeData={handleChangeData}
              onChangeAuthType={handleSetAuthType}
            />
          )}
        </CardContent>
        {errorFetch && (
          <Alert
            onClose={() => setErrorFetch(null)}
            style={STYLES}
            variant="filled"
            severity="error"
          >
            {errorFetch}
          </Alert>
        )}
      </Card>
    </animated.div>
  );
};

export default AuthCard;
