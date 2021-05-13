import React from "react";

import { Quiz } from "../../types/types";

const quiz: Quiz = {
   quizName: "Do you suck at Finance?",
   questions: [
      {
         question:
            "How much of the population of our country is financially literate?",
         points: 2,
         answer: [
            {
               option: "10%",
               isRight: false,
            },
            {
               option: "5%",
               isRight: false,
            },

            {
               option: "7%",
               isRight: true,
            },
            {
               option: "3%",
               isRight: false,
            },
         ],
      },

      {
         question:
            "How much of the population of our country invests in equities?",
         points: 2,
         answer: [
            {
               option: "10%",
               isRight: false,
            },
            {
               option: "5%",
               isRight: true,
            },

            {
               option: "7%",
               isRight: false,
            },
            {
               option: "3%",
               isRight: false,
            },
         ],
      },
   ],
};
