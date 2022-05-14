type Styles = {
  [key: string]: React.CSSProperties;
};

type SpringStyles = {
  [key: string]: {
    [key: string]: number | { [key: string]: number };
  };
};

export const STYLES: Styles = {
  card: {
    width: "300px",
    position: "relative",
    borderRadius: "25px",
    opacity: ".85",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
  header: {
    textAlign: "center",
  },
  button: {
    opacity: ".5",
  },
  content: {
    height: "85%",
  },
  alert: {
    margin: ".5em",
    borderRadius: "25px",
  },
};

export const SPRING_STYLES: SpringStyles = {
  card: {
    opacity: 1,
    rotateX: 0,
    from: { opacity: 0, rotateX: 90 },
    config: { duration: 750 },
  },
};
