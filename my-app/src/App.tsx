import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
   useNavigate,
   useParams,
   useLocation,
} from "react-router-dom";
import { QuizComponent } from "./Components/Quiz/Quiz";

import "./App.css";

function App() {
   return (
      <div className="App">
         <h1> This is my QuizApp</h1>

         <Router>
            <Routes>
               <Route path="/" element={<QuizComponent />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
