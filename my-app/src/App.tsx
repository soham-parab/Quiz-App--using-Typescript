import React from "react";
import { Routes, Route } from "react-router-dom";
import { Quiz } from "./Components/Quiz/QuizOne";
import { QuizComponentTwo } from "./Components/Quiz/QuizTwo";
import { Nav } from "./Components/Nav/nav";
import { Login } from "./Pages/Login/Login";
import { Logout } from "./Pages/Logout/Logout";
import { utilities } from "./utilities/utilities";
import { Quizzes } from "./Pages/Quizzes/Quizzes";
import axios from "axios";
import { useQuiz } from "./Context/QuizContext";
import { Homepage } from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Logout />
      <Routes>
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
