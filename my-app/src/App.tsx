import React from "react";
import { Routes, Route } from "react-router-dom";
import { QuizComponentOne } from "./Components/Quiz/QuizOne";
import { QuizComponentTwo } from "./Components/Quiz/QuizTwo";
import { Nav } from "./Components/Nav/nav";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Quizzes } from "../src/Components/Quizzes/Quizzes";
import axios from "axios";
import { useQuiz } from "./Context/QuizContext";
import { useEffect } from "react";

function App() {
   const { state, dispatch } = useQuiz();

   React.useEffect(() => {
      (async function () {
         try {
            const response = await axios.get("http://localhost:3500/quizone");
            console.log(response.data);

            dispatch({ type: "LOAD_DATA", payload: { data: response.data } });
         } catch (err) {
            console.log(err);
         }
      })();
   }, []);

   return (
      <div className="App">
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizOne" element={<QuizComponentOne />} />
            <Route path="/quizTwo" element={<QuizComponentTwo />} />
            <Route path="/quizzes" element={<Quizzes />} />
         </Routes>
      </div>
   );
}

export default App;
