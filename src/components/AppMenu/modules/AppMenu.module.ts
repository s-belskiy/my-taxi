type Styles = {
  [key: string]: {
    [key: string]: React.CSSProperties;
  };
};

type SpringStyles = {
  [key: string]: {
    [key: string]: number | { [key: string]: number };
  };
};

export const STYLES: Styles = {
  appMenu: {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: "1em",
      opacity: ".75",
    },
    appBar: {
      backgroundColor: "#fff",
      width: "90%",
      borderRadius: "25px",
    },
    toolbar: {
      display: "flex",
    },
  },
  customModal: {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "50%",
      backgroundColor: "white",
      borderRadius: "25px",
      boxShadow: "24",
      padding: 4,
    },
  },
  rightMenuItem: {
    button: {
      marginLeft: "auto",
      backgroundColor: "orange",
      color: "black",
      borderRadius: "25px",
    },
  },
};

export const SPRING_STYLES: SpringStyles = {
  modal: {
    opacity: 1,
    rotateX: 0,
    from: { opacity: 0, rotateX: 90 },
    config: { duration: 750 },
  },
};
