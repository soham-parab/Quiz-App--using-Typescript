import { Typography } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import "./Homepage.css";
import { Login } from "../Login/Login";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { Logout } from "../Logout/Logout";
export function Homepage() {
  const useStyles = makeStyles((theme) => ({
    title: {},
    text: {
      paddingTop: "7rem",
      paddingBottom: "3rem",
    },
  }));

  const classes = useStyles();
  return (
    <div className="homepage-div">
      <Typography align="center" className={classes.title} variant="h1">
        stonkstrivia <ShowChartIcon fontSize="large" />
      </Typography>

      <Typography className={classes.text} variant="h4">
        Here's a few fun Finance quizzes for you to test how good you really are
        at Finance!{" "}
      </Typography>

      <Login />
    </div>
  );
}
