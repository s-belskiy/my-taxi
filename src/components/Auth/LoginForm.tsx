import React, { useCallback } from 'react';
import { Button, Link, TextField } from '@mui/material';
import { Props } from './types/loginFrom';
import './scss/Auth.scss';

const LoginForm: React.FC<Props> = ({
	onChangeAuthType,
	handleChangeData,
	data,
	onSignIn,
}) => {
	// vars //
	const { email, password } = data;

	// callback //
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			handleChangeData(name, value);
		},
		[handleChangeData]
	);

	return (
		<div className='formContainer'>
			<TextField
				fullWidth
				id='standard-basic'
				value={email}
				onChange={handleChange}
				name='email'
				label='Введите email'
				variant='standard'
			/>
			<TextField
				id='outlined-password-input'
				fullWidth
				variant='standard'
				value={password}
				onChange={handleChange}
				name='password'
				label='Введите пароль'
				type='password'
			/>
			<p className='forgotPassword'>Не помню пароль</p>
			<Button
				variant='outlined'
				className='submitButton'
				onClick={onSignIn}
				disabled={!email || !password}
			>
				Войти
			</Button>
			<p className='newUser'>
				Новый пользователь?{' '}
				<Link
					component='button'
					variant='body2'
					underline='hover'
					onClick={() => onChangeAuthType('register')}
					className='linkSignUp'
				>
					Зарегистрироваться
				</Link>
			</p>
		</div>
	);
};

export default LoginForm;
