import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className="mt-5 ">
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
