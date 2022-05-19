import { CircularProgress } from "@mui/material";
import "./Loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loaderContainer">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
