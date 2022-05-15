import { TextField, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { CardProps } from './types/ProfileForm';

const ProfileForm: React.FC<CardProps> = ({ card, onChange }) => {
	const { cardNumber, expiryDate, cardName, cvc } = card;

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.name, event.target.value);
		},
		[onChange]
	);

	return (
		<div>
			<Typography
				style={{ textAlign: 'center' }}
				variant='subtitle2'
				gutterBottom
				component='div'
			>
				Информация о платежных данных
			</Typography>
			<div style={{display: 'flex', width: '100%'}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1em',
						width: '100%',
					}}
				>
					<div style={{ display: 'flex', gap: '.5em', width: '100%' }}>
						<TextField
							style={{ width: '100%' }}
							label='Номер карты'
							name='cardNumber'
							value={cardNumber}
							onChange={handleChange}
							InputLabelProps={{ shrink: true }}
							variant='filled'
						/>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1em',
							width: '100%',
						}}
					>
						<TextField
							required
							id='filled-required'
							label='Имя владельца'
							name='cardName'
							style={{ width: '100%' }}
							value={cardName}
							onChange={handleChange}
							variant='filled'
						/>
						<div style={{ display: 'flex', gap: '1em', width: '100%' }}>
							<TextField
								label='Действительна до'
								name='expiryDate'
								style={{ width: '30%', marginLeft: 'auto' }}
								value={expiryDate}
								onChange={handleChange}
								InputLabelProps={{ shrink: true }}
								variant='filled'
							/>
							<TextField
								label='CVV/CVC'
								name='cvc'
								style={{ width: '20%' }}
								value={cvc}
								onChange={handleChange}
								InputLabelProps={{ shrink: true }}
								variant='filled'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;
