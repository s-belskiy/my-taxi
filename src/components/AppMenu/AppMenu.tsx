import React, { useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { SPRING_STYLES, STYLES } from "./modules/AppMenu.module";
import { AccountCircle } from "@mui/icons-material";
import useAppMenu from "./hooks/useAppMenu";
import CustomModal from "../Layouts/Modal/CustomModal";
import Profile from "../Profile/Profile";
import { useSpring, animated } from "react-spring";

const AppMenu: React.FC = () => {
  // hooks //
  const {
    authSuccessfully,
    anchorEl,
    handleMenu,
    handleClose,
    handleAuth,
    handleProfile,
    openProfile,
  } = useAppMenu();

  const springProps = useSpring(SPRING_STYLES.modal);

  // memos //
  const logoMenuItem = useMemo(() => {
    return (
      <Typography variant="h6" component="div">
        Logo
      </Typography>
    );
  }, []);

  const authorizedMenuItem = useMemo(() => {
    return (
      authSuccessfully && (
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <AccountCircle style={{ fontSize: "40px" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{ marginTop: "3.2em" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleProfile(true)}>Профиль</MenuItem>
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
    handleProfile,
  ]);

  const noAuthorizedMenutItem = useMemo(() => {
    return (
      !authSuccessfully && (
        <Button
          size="small"
          style={STYLES.rightMenuItem.button}
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={handleAuth}
        >
          Войти
        </Button>
      )
    );
  }, [authSuccessfully, handleAuth]);

  return (
    <div style={STYLES.appMenu.container}>
      <AppBar style={STYLES.appMenu.appBar} position="static">
        <Toolbar style={STYLES.appMenu.toolbar}>
          {logoMenuItem}
          {authSuccessfully ? authorizedMenuItem : noAuthorizedMenutItem}
        </Toolbar>
      </AppBar>
      {openProfile && (
        <animated.div style={springProps}>
          <CustomModal
            title={"Профиль"}
            styles={{width: "30%", height: "40%", padding: '1em'}}
            open={openProfile}
            close={() => handleProfile(false)}
          >
            <Profile />
          </CustomModal>
        </animated.div>
      )}
    </div>
  );
};

export default AppMenu;
