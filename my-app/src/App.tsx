import React from "react";
import { Routes, Route } from "react-router-dom";
import { QuizComponent } from "./Components/Quiz/Quiz";
import { Nav } from "./Components/Nav/nav";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Quizzes } from "../src/Components/Quizzes/Quizzes";

function App() {
   return (
      <div className="App">
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizComponent />} />
            <Route path="/quizzes" element={<Quizzes />} />
         </Routes>
      </div>
   );
}

export default App;
