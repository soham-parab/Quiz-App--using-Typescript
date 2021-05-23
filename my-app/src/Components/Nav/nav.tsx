import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./nav.css";
const useStyles = makeStyles({
   root: {
      backgroundColor: "#002852",
   },
});
const labelClass = makeStyles({
   label: {
      color: "white",
   },
   "&:hover": {
      backgroundColor: "333",
   },
});

export const Nav = () => {
   const classes = useStyles();

   const label = labelClass();
   const [value, setValue] = React.useState(0);

   return (
      <>
         <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
            showLabels
            className={classes.root}
         >
            <Link className="Home-Link" to="/">
               <BottomNavigationAction
                  className={label.label}
                  label="Home"
                  icon={<HomeRoundedIcon />}
               />
            </Link>
         </BottomNavigation>
      </>
   );
};
