interface StyleRecord extends Record<string, React.CSSProperties | StyleRecord> {};

export const STYLES: StyleRecord = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
  link: {
    fontSize: "13px",
  },
  pCenter: {
    textAlign: "center",
    fontSize: "13px",
  }
};
