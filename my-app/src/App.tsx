import React from "react";
import { Routes, Route } from "react-router-dom";
import { QuizComponentOne } from "./Components/Quiz/QuizOne";
import { QuizComponentTwo } from "./Components/Quiz/QuizTwo";
import { Nav } from "./Components/Nav/nav";
import "./App.css";

import { Quizzes } from "../src/Components/Quizzes/Quizzes";
import axios from "axios";
import { useQuiz } from "./Context/QuizContext";
import { useEffect } from "react";

function App() {
   return (
      <div className="App">
         <Nav />
         <Routes>
            <Route path="/" element={<Quizzes />} />
            <Route path="/quizOne" element={<QuizComponentOne />} />
            <Route path="/quizTwo" element={<QuizComponentTwo />} />
         </Routes>
      </div>
   );
}

export default App;
