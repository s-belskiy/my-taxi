import React, {useCallback} from "react";
import { Button, Link, TextField } from "@mui/material";
import { Props } from "./types/registerForm";
import { STYLES } from "./modules/RegisterForm.module";

const RegisterForm: React.FC<Props> = ({ onChangeAuthType, data, handleChangeData, onSignUp}) => {
  // vars //
  const { email, password, name, surname } = data;

  // callbacks //
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
        defaultValue={null}
        label="Введите email"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        value={name}
        onChange={handleChange}
        name="name"
        defaultValue={null}
        label="Введите имя"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        value={surname}
        onChange={handleChange}
        name="surname"
        defaultValue={null}
        label="Введите фамилию"
        variant="standard"
      />
      <TextField
        id="outlined-password-input"
        fullWidth
        variant="standard"
        value={password}
        onChange={handleChange}
        name="password"
        defaultValue={null}
        label="Введите пароль"
        type="password"
      />
      <Button onClick={onSignUp} disabled={!email || !password}>Зарегистрироваться</Button>
      <p style={STYLES.pCenter}>
        Уже зарегистрированы?{" "}
        <Link
          component="button"
          variant="body2"
          underline="hover"
          onClick={() => onChangeAuthType("login")}
          style={STYLES.link}
        >
          Войти
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
