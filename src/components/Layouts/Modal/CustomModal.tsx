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

const DEFAULT_MODAL_STYLE: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "25px",
  boxShadow: "25",
}

const CustomModal: React.FC<Props> = (props) => {
  const { open, styles, close, children, title } = props;

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{...DEFAULT_MODAL_STYLE, ...styles}}>
        <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
