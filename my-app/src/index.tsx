import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QuizProvider } from "./Context/QuizContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <QuizProvider>
            <App />
         </QuizProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);
