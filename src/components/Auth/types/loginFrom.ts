export type Props = {
  onChangeAuthType: (type: string) => void;
  data: { email: string; password: string };
  handleChangeData: (email: string, password: string) => void;
  onSignIn: () => void;
};
