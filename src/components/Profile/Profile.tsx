import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import CustomModal from '../Layouts/Modal/CustomModal';
import useProfile from './hooks/useProfile';
import ProfileForm from './ProfileForm';
import "./scss/Profile.scss"

const additionalModalStyles = {
	width: '30%',
	height: '40%',
	padding: '1em',
};

type ProfileProps = {
	openProfile: boolean;
	handleOpenProfile: (bool: boolean) => void;
};

const Profile: React.FC<ProfileProps> = ({
	openProfile,
	handleOpenProfile,
}) => {
	const {
		card,
		handleChangeCard,
		loading,
		error,
		updating,
		saveError,
		handleSaveCard,
	} = useProfile();

	const actions = useMemo(() => {
		return (
			<div className='actionsContainer'>
				<Button
					onClick={() => handleSaveCard()}
					className='successButton'
					variant='contained'
					color='success'
				>
					Сохранить
				</Button>
				<Button
					className='cancelButton'
					variant='contained'
					onClick={() => handleOpenProfile(false)}
					color='error'
				>
					Отменить
				</Button>
			</div>
		);
	}, [handleOpenProfile, handleSaveCard]);

	return (
		<CustomModal
			title={'Профиль'}
			styles={additionalModalStyles}
			open={openProfile}
			actions={actions}
			close={() => handleOpenProfile(false)}
			loading={loading || updating}
		>
			<div className='profileContainer'>
				<ProfileForm
					loading={loading}
					error={error}
					updating={updating}
					saveError={saveError}
					onSaveCard={handleSaveCard}
					card={card}
					onChange={handleChangeCard}
				/>
			</div>
		</CustomModal>
	);
};

export default Profile;
