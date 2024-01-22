import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const { user, userInfo } = useUserAuth();

  return (
    <>
      <div>{user.uid}</div>
      <div>{userInfo.fullname}</div>
      <Outlet />
    </>
  );
};

export default Profile;
