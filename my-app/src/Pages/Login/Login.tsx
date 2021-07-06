import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        padding: "1rem 4rem",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#3c52b2",
        },
      },
    })
  );
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const classes = useStyles();

  return (
    <>
      <div>
        <h2>{isAuthenticated && user?.name}</h2>
        {!isAuthenticated && (
          <Button
            className={classes.button}
            onClick={() => loginWithRedirect()}
            color="primary"
          >
            Log In
          </Button>
        )}
        {/* {isAuthenticated && navigate("/quizzes")} */}
      </div>
    </>
  );
};
