import React from "react";
import { useState } from "react";
import { useQuiz } from "../../Context/QuizContext";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./QuizTwo.css";
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

export const QuizComponentTwo = () => {
   const { state, dispatch } = useQuiz();

   React.useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               "https://quiz-app-api.sohamparab13.repl.co/quiztwo"
            );
            console.log(response.data);

            dispatch({ type: "LOAD_DATA", payload: { data: response.data } });
         } catch (err) {
            console.log(err);
         }
      })();
   }, []);

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

   //    const Option: any = ({ item }): any => {
   //       return (
   //          <Button
   //             style={styler}
   //             disabled={state.disabled}
   //             onClick={(event) => {
   //                event.persist();
   //                if (item.isRight) {
   //                   console.log(event.target);

   //                   dispatch({ type: "RIGHT_ANS" });
   //                } else {
   //                   dispatch({ type: "WRONG_ANS" });
   //                }
   //             }}
   //             variant="contained"
   //             color="primary"
   //          >
   //             {item.option}
   //          </Button>
   //       );
   //    };

   return (
      <div className="quiz-body">
         <h1 className="quiz-name">Fundamentals of Crypto.</h1>

         <div className="quiz-parent">
            <CircularProgress
               variant="determinate"
               value={(1 - time / 10) * 100}
            />

            <br />
            <h1 className="question">
               {state.data.questions[state.currentQuesNumber].question}{" "}
            </h1>
            <h2 className="score">{state.score} </h2>

            <div className="options-div">
               {state.data.questions[state.currentQuesNumber].answer.map(
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
                              // variant="contained"
                              // color="primary"
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
