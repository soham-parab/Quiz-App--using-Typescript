import React from "react";
import { useState } from "react";
import { useQuiz } from "../../Context/QuizContext";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Quiz.css";
import axios from "axios";

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

export const QuizComponent = () => {
   const { state, dispatch } = useQuiz();

   const [disabled, setDisabled] = useState(false);
   console.log(state.data);
   const classes = useStyles();
   const [time, setTime] = React.useState(10);

   // const timerOne = useTimer();

   // React.useEffect(() => {
   //    if (time === 0) {
   //       console.log("2 baar");
   //       setTime(10);
   //       dispatch({ type: "NEXT_QUES" });
   //    }
   // }, [time]);

   // React.useEffect(() => {
   //    const timer = setInterval(() => {
   //       setTime((prevTime) => {
   //          return prevTime - 1;
   //       });
   //    }, 1000);

   //    return () => {
   //       clearInterval(timer);
   //       setTime(10);
   //       console.log("asdsad");
   //    };
   // }, [state.currentQuesNumber]);

   return (
      // <div>
      //    <h1>wahuida</h1>

      //    <h2>{state.score} </h2>
      //    <h2>{state.data.quizName}</h2>
      // </div>

      <div className="quiz-body">
         <div className="quiz-parent">
            <CircularProgress
               variant="determinate"
               value={(1 - time / 10) * 100}
            />
            <h1>Fundamentals of Finance.</h1>
            <br />
            <h3> {state.data.questions[state.currentQuesNumber].question} </h3>
            <h2>{state.score} </h2>
            {state.data.questions[state.currentQuesNumber].answer.map(
               (item: any) => {
                  return (
                     <div>
                        <Button
                           disabled={state.disabled}
                           onClick={() => {
                              if (item.isRight) {
                                 dispatch({ type: "RIGHT_ANS" });
                              } else {
                                 dispatch({ type: "WRONG_ANS" });
                              }
                           }}
                           variant="contained"
                           color="primary"
                        >
                           {item.option}
                        </Button>
                     </div>
                  );
               }
            )}
            <Button
               onClick={() => {
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
   );
};
