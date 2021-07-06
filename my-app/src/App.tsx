import React from "react";
import { Routes, Route } from "react-router-dom";
import { Quiz } from "./Components/Quiz/Quiz";

import { Nav } from "./Components/Nav/nav";
import { Login } from "./Pages/Login/Login";
import { Logout } from "./Pages/Logout/Logout";
import { utilities } from "./utilities/utilities";
import { Quizzes } from "./Pages/Quizzes/Quizzes";
import axios from "axios";
import { useQuiz } from "./Context/QuizContext";
import { Homepage } from "./Pages/Homepage/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Routes>
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route
          path="/quizzes"
          element={isAuthenticated ? <Quizzes /> : <Homepage />}
        />
      </Routes>
    </div>
  );
}

export default App;
