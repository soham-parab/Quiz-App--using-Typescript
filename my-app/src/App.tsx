import React from "react";
import { Routes, Route } from "react-router-dom";
import { QuizComponent } from "./Components/Quiz/Quiz";

import "./App.css";

function App() {
   return (
      <div className="App">
         <h1> This is my QuizApp</h1>
         <Routes>
            <Route path="/" element={<QuizComponent />} />
         </Routes>
      </div>
   );
}

export default App;
