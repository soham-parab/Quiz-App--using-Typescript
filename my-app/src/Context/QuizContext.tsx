import React, { useState, useReducer, useContext, createContext } from "react";
import { quizDB } from "../Components/Quiz/QuizDB";
import { Quiz } from "../types/types";

const QuizContext = createContext({} as ContextValue);

type currentStatus = "starting" | "ongoing" | "finished";

type QuizData = {
   score: number;
   username: string;
   currentQuesNumber: number;
   status: currentStatus;
   quizNumber: number;
   correctAnswers: number;
   wrongAnswers: number;
   data: Quiz;
};

type ContextValue = {
   score: number;
   username: string;
   currentQuesNumber: number;
   status: string;
   quizNumber: number;
   correctAnswers: number;
   wrongAnswers: number;
   data: Quiz;
   dispatch: React.Dispatch<ACTIONTYPE>;
};

const initialState: QuizData = {
   score: 0,
   username: "",
   currentQuesNumber: 1,
   status: "starting",
   quizNumber: 1,
   correctAnswers: 0,
   wrongAnswers: 0,
   data: quizDB,
};

export const QuizProvider: React.FC = ({ children }) => {
   const [
      {
         score,
         username,
         currentQuesNumber,
         status,
         quizNumber,
         correctAnswers,
         wrongAnswers,
         data,
      },
      dispatch,
   ] = useReducer(quizReducer, initialState);
   return (
      <QuizContext.Provider
         value={{
            score,
            username,
            currentQuesNumber,
            status,
            quizNumber,
            correctAnswers,
            wrongAnswers,
            data,
            dispatch,
         }}
      >
         {children}
      </QuizContext.Provider>
   );
};

type ACTIONTYPE =
   | { type: "RESET" }
   | { type: "INCREMENT SCORE"; payload: { score: number } }
   | { type: "DECREMENT SCORE"; payload: { score: number } };

export const quizReducer = (state: QuizData, action: ACTIONTYPE): QuizData => {
   switch (action.type) {
      case "RESET":
         return {
            ...state,
            score: 0,
            status: "starting",
            quizNumber: 1,
            correctAnswers: 0,
            wrongAnswers: 0,
            currentQuesNumber: 1,
            data: quizDB,
         };

      default:
         break;
   }
   return state;
};

export const useQuiz = () => {
   return useContext(QuizContext);
};
