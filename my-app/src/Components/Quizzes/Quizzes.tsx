import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./Quizzes.css";

export function Quizzes() {
   return (
      <React.Fragment>
         <div className="card-parent">
            <CssBaseline />
            <Container maxWidth="sm">
               <Typography
                  component="div"
                  style={{ backgroundColor: "grey", height: "50vh" }}
               />
            </Container>

            <Container maxWidth="sm">
               <Typography
                  component="div"
                  style={{ backgroundColor: "grey", height: "50vh" }}
               />
            </Container>
         </div>
      </React.Fragment>
   );
}
