import React from "react";
import useProfile from "./hooks/useProfile";
import ProfileForm from "./ProfileForm";


const Profile: React.FC = () => {

  const {card, handleChangeCard} = useProfile();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
      <ProfileForm card={card} onChange={handleChangeCard}/>
    </div>
  );
};

export default Profile;
