import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const images = [
   {
      url: "https://ml8ygptwlcsq.i.optimole.com/KqGSM2A.LwXc~1d1f4/w:1237/h:692/q:auto/https://www.securities.io/wp-content/uploads/2020/09/wealth-management.jpg",
      title: "Play!",
      width: "50vw",
      height: "50vh",
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
            width: "50% !important",
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

export const Home = () => {
   const classes = useStyles();

   return (
      <>
         <h1>
            Think you've got the Finance basics right? Maybe it's time to think
            again.
         </h1>

         <div className={classes.root}>
            {images.map((image) => (
               <Link to="/quiz">
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
               </Link>
            ))}
         </div>
      </>
   );
};
