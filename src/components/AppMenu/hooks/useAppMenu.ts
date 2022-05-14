import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { ReturnedParams } from "../types/AuthMenu";

const useAppMenu = (): ReturnedParams => {
  // hooks //
  const { success: authSuccessfully } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();

  // states //
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openProfile, setOpenProfie] = useState<boolean>(false);

  // callbacks //
  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleProfile = useCallback(() => {
    setOpenProfie((prev) => !prev);
  }, []);

  const handleAuth = useCallback(() => {
    if (authSuccessfully) {
      window.localStorage.setItem("auth", JSON.stringify({}));
      window.location.reload();
    } else navigate("/auth");
  }, [authSuccessfully, navigate]);

  return {
    authSuccessfully,
    anchorEl,
    handleMenu,
    handleClose,
    handleAuth,
    handleProfile,
    openProfile,
  };
};

export default useAppMenu;
