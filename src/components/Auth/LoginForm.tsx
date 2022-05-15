import React, {useCallback} from "react";
import { Button, Link, TextField } from "@mui/material";
import { Props } from "./types/loginFrom";
import { STYLES } from "./modules/LoginForm.module";

const LoginForm: React.FC<Props> = ({onChangeAuthType,handleChangeData,data,onSignIn}) => {
  // vars //
  const { email, password } = data; 

  // callback //
  const handleChange = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    handleChangeData(name, value);
  }, [handleChangeData]);

  return (
    <div style={STYLES.container}>
      <TextField
        fullWidth
        id="standard-basic"
        value={email}
        onChange={handleChange}
        name="email"
        label="Введите email"
        variant="standard"
      />
      <TextField
        id="outlined-password-input"
        fullWidth
        variant="standard"
        value={password}
        onChange={handleChange}
        name="password"
        label="Введите пароль"
        type="password"
      />
      <p style={STYLES.pLeft}>Не помню пароль</p>
      <Button
        onClick={onSignIn}
        disabled={!email || !password}
        style={STYLES.btnLogin}
      >
        Войти
      </Button>
      <p style={STYLES.pCenter}>
        Новый пользователь?{" "}
        <Link
          component="button"
          variant="body2"
          underline="hover"
          onClick={() => onChangeAuthType("register")}
          style={STYLES.link}
        >
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
