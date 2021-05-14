import React, { useState, useReducer, useContext, createContext } from "react";
import { quizDB } from "../Components/Quiz/QuizDB";
import { Quiz } from "../types/types";

const QuizContext = createContext({} as ContextValue);

type ContextValue = {
   state: Quiz;
   dispatch: React.Dispatch<any>;
};

export const QuizProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(quizReducer, quizDB);
   return (
      <QuizContext.Provider value={{ state, dispatch }}>
         {children}
      </QuizContext.Provider>
   );
};

// type ACTIONTYPE =
// | {type:"RESET"}
// | {type:"INCREMENT SCORE" ; payload:{score:number}}
// | {type:"DECREMENT SCORE" ; payload:{score:number}}

export const quizReducer = (acc: Quiz, action: any): Quiz => {
   return acc;
};

export const useQuiz = () => {
   return useContext(QuizContext);
};
