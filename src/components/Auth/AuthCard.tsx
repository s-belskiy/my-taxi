import React, { useMemo } from 'react';
import { Alert, Button, Card, CardContent, CardHeader } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuthCard from './hooks/useAuthCard';
import { useNavigate } from 'react-router-dom';
import Loader from '../Layouts/Loader/Loader';
import './scss/Auth.scss';

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
		onSignIn,
	} = useAuthCard();

	const renderButtonBack = useMemo(() => {
		return (
			<Button onClick={() => navigate('/')} className='buttonBack'>
				<ArrowBackIcon />
			</Button>
		);
	}, []);

	return (
		<Card className='card'>
			{loading && <Loader />}
			<CardHeader
				className='header'
				title={authType === 'login' ? <div className='title'>{renderButtonBack}Вход</div> : <div className='title'>{renderButtonBack}Регистрация</div>}
			></CardHeader>
			<CardContent className='content'>
				{authType === 'login' ? (
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
					className='alert'
					variant='filled'
					severity='error'
				>
					{errorFetch}
				</Alert>
			)}
		</Card>
	);
};

export default AuthCard;
