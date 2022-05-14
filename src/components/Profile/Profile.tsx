import { Typography } from "@mui/material";
import React from "react";

// type CardState = {
//   cardNumber: any;
//   expiryDate: string;
//   cardName: string;
//   cvc: string;
//   token: string;
// };

const Profile: React.FC = () => {
  // const [card, setCard] = useState<CardState>({
  //   cardNumber: "",
  //   expiryDate: "",
  //   cardName: "",
  //   cvc: "",
  //   token: "",
  // });

  // const handleChangeCard = useCallback((name: string, value: string) => {
  //   setCard((prev) => ({ ...prev, [name]: value }));
  // }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
      <Typography
        style={{ textAlign: "center" }}
        variant="subtitle2"
        gutterBottom
        component="div"
      >
        Информация о платежных данных
      </Typography>
    </div>
  );
};

export default Profile;
