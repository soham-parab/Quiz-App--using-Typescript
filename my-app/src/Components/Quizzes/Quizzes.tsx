import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./Quizzes.css";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const images = [
   // {
   //    url: "/static/images/grid-list/breakfast.jpg",
   //    title: "Breakfast",
   //    width: "40%",
   // },
   {
      url: "https://www.silversurfers.com/wp-content/uploads/2020/05/bigstock-Quiz-Text-On-Wooden-Cubes-On-A-359172064.jpg",
      title: "Test yourself on Finance!",
      width: "30%",
   },
   {
      url: "data:image/jpeg;base64,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",
      title: "Test yourself on Crypto!",
      width: "30%",
   },
];

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: "flex",
         flexWrap: "wrap",
         minWidth: 300,
         width: "100%",
      },
      image: {
         position: "relative",
         height: 200,
         [theme.breakpoints.down("xs")]: {
            width: "100% !important", // Overrides inline-style
            height: 100,
         },
         "&:hover, &$focusVisible": {
            zIndex: 1,
            "& $imageBackdrop": {
               opacity: 0.15,
            },
            "& $imageMarked": {
               opacity: 0,
            },
            "& $imageTitle": {
               border: "4px solid currentColor",
            },
         },
      },
      focusVisible: {},
      imageButton: {
         position: "absolute",
         left: 0,
         right: 0,
         top: 0,
         bottom: 0,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         color: theme.palette.common.white,
      },
      imageSrc: {
         position: "absolute",
         left: 0,
         right: 0,
         top: 0,
         bottom: 0,
         backgroundSize: "cover",
         backgroundPosition: "center 40%",
      },
      imageBackdrop: {
         position: "absolute",
         left: 0,
         right: 0,
         top: 0,
         bottom: 0,
         backgroundColor: theme.palette.common.black,
         opacity: 0.4,
         transition: theme.transitions.create("opacity"),
      },
      imageTitle: {
         position: "relative",
         padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
            theme.spacing(1) + 6
         }px`,
      },
      imageMarked: {
         height: 3,
         width: 18,
         backgroundColor: theme.palette.common.white,
         position: "absolute",
         bottom: -2,
         left: "calc(50% - 9px)",
         transition: theme.transitions.create("opacity"),
      },
   })
);

export function Quizzes() {
   const classes = useStyles();
   return (
      <div className="card-parent">
         <div className={classes.root}>
            {images.map((image) => (
               <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                     width: image.width,
                  }}
               >
                  <span
                     className={classes.imageSrc}
                     style={{
                        backgroundImage: `url(${image.url})`,
                     }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                     <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                     >
                        {image.title}
                        <span className={classes.imageMarked} />
                     </Typography>
                  </span>
               </ButtonBase>
            ))}
            <React.Fragment>
               <div>
                  <CssBaseline />
                  <Container maxWidth="sm">
                     <Typography
                        component="div"
                        style={{ backgroundColor: "grey", height: "50vh" }}
                     />
                  </Container>

                  <Container maxWidth="sm">
                     <Typography
                        component="div"
                        style={{ backgroundColor: "grey", height: "50vh" }}
                     />
                  </Container>
               </div>
            </React.Fragment>
         </div>
      </div>
   );
}
