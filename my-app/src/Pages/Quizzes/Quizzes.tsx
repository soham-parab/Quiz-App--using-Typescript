import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./Quizzes.css";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "70.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export function Quizzes() {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="main-div">
        <h1 className="quizzes-title">
          {" "}
          Think you've got some of the Finance basics right? Find out in this
          quiz!
        </h1>
        <div className="card-div">
          <Link className="main-link" to="/quiz/60daffed69aa9632d40371af">
            <Card className={classes.root}>
              <CardHeader title="How good are you at Personal Finance?" />

              <CardMedia
                className={classes.media}
                image="https://passiveincomemd.com/wp-content/uploads/2019/12/top-ten-matter-most-personal-finance-300x200.jpg"
                title="Finance"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>

            <button className="link-button">Play this Quiz</button>
          </Link>

          <Link className="main-link" to="/quiz/60db002a69aa9632d40371b0">
            <Card className={classes.root}>
              <CardHeader title="How well do you know Crypto?" />

              <CardMedia
                className={classes.media}
                image="https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg"
                title="Crypto"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>

            <button className="link-button">Play this Quiz</button>
          </Link>
        </div>
      </div>
    </>
  );
}
