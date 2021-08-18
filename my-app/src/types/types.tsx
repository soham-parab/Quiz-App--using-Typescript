import React from "react";

export type Questions = {
  id: string;
  question: string;
  points: number;
  options: Answer[];
};

export type Answer = {
  option: string;
  isRight: boolean;
};

export type Quiz = {
  quizName: string;
  questions: Questions[];
};
