export type ReturnedParams = {
  authSuccessfully?: boolean;
  anchorEl: HTMLElement | null;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  handleAuth: () => void;
  handleProfile: (openProfile: boolean) => void;
  openProfile: boolean,
};
