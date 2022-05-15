import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Loader from '../Loader/Loader';
import { DEFAULT_MODAL_STYLE } from './modules/CustomModal.module';
import { ModalProps } from './types/CustomModal';

const CustomModal: React.FC<ModalProps> = props => {
	const { open, styles, close, children, title, actions, loading } = props;

	return (
		<Modal
			open={open}
			onClose={close}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box style={{ ...DEFAULT_MODAL_STYLE, ...styles }}>
				{loading && <Loader />}
				<div style={{ height: '92%' }}>
					<Typography
						style={{ textAlign: 'center' }}
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
