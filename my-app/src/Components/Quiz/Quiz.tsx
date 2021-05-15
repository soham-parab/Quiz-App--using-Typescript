import React from "react";
import { useState } from "react";
import { useQuiz } from "../../Context/QuizContext";
import { quizDB } from "./QuizDB";
export const QuizComponent = () => {
   const [disabled, setDisabled] = useState(false);
   const { state, dispatch } = useQuiz();
   console.log(state);

   return (
      <div>
         <h1>Quizzzzzzzzzzzzzzzz</h1>
         <h3> {state.data.questions[state.currentQuesNumber].question} </h3>
         <h2>{state.score} </h2>

         <button
            onClick={() => {
               dispatch({ type: "NEXT_QUES" });
               setDisabled(false);
            }}
         >
            NEXT QUESTION
         </button>

         <button
            onClick={() => {
               dispatch({ type: "RESET" });
               setDisabled(false);
            }}
         >
            RESET QUIZ
         </button>
         {state.data.questions[state.currentQuesNumber].answer.map((item) => {
            return (
               <div>
                  <button
                     disabled={state.disabled}
                     onClick={() => {
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
         })}
      </div>
   );
};
