import React, { useMemo } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuItem,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { AccountCircle } from '@mui/icons-material';
import useAppMenu from './hooks/useAppMenu';
import Profile from '../Profile/Profile';
import './scss/AppMenu.scss';

const AppMenu: React.FC = () => {
	// hooks //
	const {
		authSuccessfully,
		anchorEl,
		handleMenu,
		handleClose,
		handleAuth,
		handleOpenProfile,
		openProfile,
	} = useAppMenu();

	// memos //
	const logoMenuItem = useMemo(() => {
		return (
			<Typography variant='h6' component='div'>
				Logo
			</Typography>
		);
	}, []);

	const authorizedMenuItem = useMemo(() => {
		return (
			authSuccessfully && (
				<div className='buttonContainer'>
					<IconButton
						size='large'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleMenu}
					>
						<AccountCircle className='userIcon' />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						className='menu'
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={() => handleOpenProfile(true)}>Профиль</MenuItem>
						<MenuItem onClick={handleAuth}>Выйти</MenuItem>
					</Menu>
				</div>
			)
		);
	}, [
		authSuccessfully,
		anchorEl,
		handleAuth,
		handleClose,
		handleMenu,
		handleOpenProfile,
	]);

	const noAuthorizedMenuItem = useMemo(() => {
		return (
			!authSuccessfully && (
				<Button
					size='small'
					className='authButton'
					variant='contained'
					startIcon={<LoginIcon />}
					onClick={handleAuth}
				>
					Войти
				</Button>
			)
		);
	}, [authSuccessfully, handleAuth]);

	return (
		<div className='appMenuContainer'>
			<AppBar className='navbar' position='static'>
				<Toolbar className='toolbar'>
					{logoMenuItem}
					{authSuccessfully ? authorizedMenuItem : noAuthorizedMenuItem}
				</Toolbar>
			</AppBar>
			{openProfile && (
				<Profile
					handleOpenProfile={handleOpenProfile}
					openProfile={openProfile}
				/>
			)}
		</div>
	);
};

export default AppMenu;
