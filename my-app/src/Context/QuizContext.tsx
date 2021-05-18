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
   disabled: boolean;
};

type ContextValue = {
   state: QuizData;
   dispatch: React.Dispatch<ACTIONTYPE>;
};

const initialState: QuizData = {
   score: 0,
   username: "",
   currentQuesNumber: 0,
   status: "starting",
   quizNumber: 1,
   correctAnswers: 0,
   wrongAnswers: 0,
   data: quizDB,
   disabled: false,
};

export const QuizProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(quizReducer, initialState);
   return (
      <QuizContext.Provider
         value={{
            state,
            dispatch,
         }}
      >
         {children}
      </QuizContext.Provider>
   );
};

type ACTIONTYPE =
   | { type: "RESET" }
   | { type: "RIGHT_ANS" }
   | { type: "WRONG_ANS" }
   | { type: "NEXT_QUES" };

export const quizReducer = (
   quizState: QuizData,
   action: ACTIONTYPE
): QuizData => {
   switch (action.type) {
      case "RESET":
         return {
            ...quizState,
            score: 0,
            status: "starting",
            quizNumber: 1,
            correctAnswers: 0,
            wrongAnswers: 0,
            currentQuesNumber: 0,
            data: quizDB,
            disabled: false,
         };

      case "RIGHT_ANS":
         return {
            ...quizState,
            score: quizState.score + 1,
            correctAnswers: quizState.correctAnswers + 1,
            disabled: true,
         };

      case "WRONG_ANS":
         return {
            ...quizState,
            score: quizState.score - 1,
            wrongAnswers: quizState.wrongAnswers + 1,
            disabled: true,
         };

      case "NEXT_QUES":
         if (
            quizState.currentQuesNumber + 1 <
            quizState.data.questions.length
         ) {
            return {
               ...quizState,
               currentQuesNumber: quizState.currentQuesNumber + 1,
               disabled: false,
            };
         } else {
            return { ...quizState, disabled: true };
         }

      default:
         break;
   }
   return quizState;
};

export const useQuiz = () => {
   return useContext(QuizContext);
};
