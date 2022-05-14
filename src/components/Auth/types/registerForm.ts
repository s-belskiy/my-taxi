export type Props = {
  onChangeAuthType: (type: string) => void;
  data: {
    email: string;
    password: string;
    name?: string;
    surname?: string;
  };
  handleChangeData: (
    email: string,
    password: string,
    name?: string,
    surname?: string
  ) => void;
  onSignUp: () => void;
};
