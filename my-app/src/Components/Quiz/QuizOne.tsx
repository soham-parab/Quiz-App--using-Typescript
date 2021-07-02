import React from "react";
import { useState, useEffect } from "react";
import { useQuiz } from "../../Context/QuizContext";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./QuizOne.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const useTimer = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const Quiz = () => {
  const { id } = useParams();
  console.log(id);
  console.log("lien 47");
  const { state, dispatch } = useQuiz();

  const [styler, setStyler] = useState({});
  const rightOptionStyle = {
    border: "1px solid green",
  };

  const wrongOptionStyle = {
    border: "1px solid red",
  };

  const [disabled, setDisabled] = useState(false);
  console.log(state.data);
  const classes = useStyles();
  const [time, setTime] = React.useState(10);
  const [selected, setSelected] = useState("");

  const checkHandler = (item: any) => {
    if (selected === item && item.isRight === false) return "wrong";
    else if (item.isRight === true) return "select";
  };

  useEffect(() => {
    console.log("effect");

    (async function () {
      try {
        const response = await axios.get(
          `https://stonkstrivia-restapi.herokuapp.com/quiz/${id}`
        );
        console.log(response.data, "uihashd");

        dispatch({ type: "LOAD_DATA", payload: { data: response.data } });
      } catch (err) {
        console.log(err, "error");
      }
    })();
  }, []);
  console.log(state.data.questions);
  return (
    <div className="quiz-body">
      <h1 className="quiz-name">Fundamentals of Personal Finance.</h1>
      <div className="quiz-parent">
        <CircularProgress variant="determinate" value={(1 - time / 10) * 100} />

        <br />
        <h1
          className="question"
          style={{ display: state.data.questions ? "" : "none" }}
        >
          {state.data.questions.length &&
            state.data.questions[state.currentQuesNumber].question}{" "}
        </h1>
        {console.log(state.data.questions[0].options)}
        <h2 className="score">Score: {state.score} </h2>
        <div
          className="options-div"
          style={{ display: state.data.questions ? "" : "none" }}
        >
          {state.data.questions.length &&
            state.data.questions[state.currentQuesNumber].options.map(
              (item: any) => {
                return (
                  <div>
                    <button
                      className={`singleOption ${
                        selected && checkHandler(item)
                      }`}
                      disabled={state.disabled}
                      onClick={() => {
                        setSelected(item);
                        if (item.isRight) {
                          dispatch({ type: "RIGHT_ANS" });
                        } else {
                          dispatch({ type: "WRONG_ANS" });
                        }
                      }}
                    >
                      {item.option}
                    </button>
                  </div>
                );
              }
            )}
        </div>
        <div className="material-buttons">
          <Button
            onClick={() => {
              setSelected("");
              dispatch({ type: "NEXT_QUES" });
              setDisabled(false);
            }}
            variant="contained"
          >
            {" "}
            NEXT QUESTION
          </Button>

          <Button
            onClick={() => {
              setSelected("");
              dispatch({ type: "RESET" });
              setDisabled(false);
            }}
            variant="contained"
          >
            {" "}
            RESET QUIZ
          </Button>
        </div>
      </div>
    </div>
  );
};
