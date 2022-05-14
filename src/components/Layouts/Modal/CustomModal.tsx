import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type Props = {
  open: boolean;
  styles?: any | undefined;
  close: (bool: boolean) => void;
  children?: any | undefined;
  title?: string | undefined;
};

const CustomModal: React.FC<Props> = (props) => {
  const { open, styles, close, children, title } = props;

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles}>
        <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
