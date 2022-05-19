import React, { useCallback } from 'react';
import { Button, Link, TextField } from '@mui/material';
import { Props } from './types/registerForm';
import './scss/Auth.scss';

const RegisterForm: React.FC<Props> = ({
	onChangeAuthType,
	data,
	handleChangeData,
	onSignUp,
}) => {
	// vars //
	const { email, password, name, surname } = data;

	// callbacks //
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
				value={email}
				onChange={handleChange}
				name='email'
				label='Введите email'
				variant='standard'
			/>
			<TextField
				fullWidth
				value={name}
				onChange={handleChange}
				name='name'
				label='Введите имя'
				variant='standard'
			/>
			<TextField
				fullWidth
				value={surname}
				onChange={handleChange}
				name='surname'
				label='Введите фамилию'
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
			<Button
				className='submitButton'
				variant='outlined'
				onClick={onSignUp}
				disabled={!email || !password}
			>
				Зарегистрироваться
			</Button>
			<p className='alreadyRegistered'>
				Уже зарегистрированы?{' '}
				<Link
					component='button'
					variant='body2'
					underline='hover'
					onClick={() => onChangeAuthType('login')}
					className='linkSignIn'
				>
					Войти
				</Link>
			</p>
		</div>
	);
};

export default RegisterForm;
