import { Typography } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import { Login } from "../Login/Login";
export function Homepage() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {},
    })
  );
  return (
    <div>
      <Login />
      <Typography variant="h1">stonkstrivia</Typography>
    </div>
  );
}
