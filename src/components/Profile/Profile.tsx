import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import CustomModal from '../Layouts/Modal/CustomModal';
import useProfile from './hooks/useProfile';
import ProfileForm from './ProfileForm';

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
			<div style={{ display: 'flex', width: '100%' }}>
				<Button
					onClick={() => handleSaveCard()}
					style={{ borderRadius: '25px' }}
					variant='contained'
					color='success'
				>
					Сохранить
				</Button>
				<Button
					style={{ marginLeft: 'auto', borderRadius: '25px' }}
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
			styles={{ width: '30%', height: '40%', padding: '1em' }}
			open={openProfile}
			actions={actions}
			close={() => handleOpenProfile(false)}
			loading={loading || updating}
		>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '.5em' }}>
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
