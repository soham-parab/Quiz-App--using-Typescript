import React from "react";
import { useState } from "react";
import { useQuiz } from "../../Context/QuizContext";
import { quizDB } from "./QuizDB";
export const QuizComponent = () => {
   const { state, dispatch } = useQuiz();
   {
      console.log(state);
   }
   return (
      <div>
         <h1>Quizzzzzzzzzzzzzzzz</h1>
         {quizDB.questions[0].question}
      </div>
   );
};
