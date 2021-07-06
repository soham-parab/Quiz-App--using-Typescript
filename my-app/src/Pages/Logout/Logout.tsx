import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}

      {!isAuthenticated && navigate("/")}
    </>
  );
};
