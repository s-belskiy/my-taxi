import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Loader from '../Loader/Loader';
import { ModalProps } from './types/CustomModal';
import "./scss/CustomModal.scss";

const CustomModal: React.FC<ModalProps> = props => {
	const {
		open,
		styles: additionalModalStyles,
		close,
		children,
		title,
		actions,
		loading,
	} = props;

	return (
		<Modal
			className='customModal'
			open={open}
			onClose={close}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box className='boxCustomModal' style={additionalModalStyles}>
				{loading && <Loader />}
				<div className='customModalContent'>
					<Typography
						className='titleCustomModal'
						variant='h3'
						gutterBottom
						component='div'
					>
						{title}
					</Typography>
					<div>{children}</div>
				</div>
				<div>{actions}</div>
			</Box>
		</Modal>
	);
};

export default CustomModal;
