import { CircularProgress } from "@mui/material";
import { STYLES } from "./Loader.module";

const Loader: React.FC = () => {
  return (
    <div style={STYLES.container}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
