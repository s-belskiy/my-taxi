interface StyleRecord extends Record<string, React.CSSProperties | StyleRecord> {};

export const STYLES: StyleRecord = {
  container: {
    background: `url("images/background_auth.jpg") no-repeat center center fixed`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
