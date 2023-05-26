import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/vishnu-shankar-1352181b1/">
           Developed by Vishnu Shankar
        </a>{" "}
        | {" "}   
        <a target="_blank" href="https://www.linkedin.com/in/vishnu-shankar-1352181b1/">
            Linkedin
        </a>{" "}
        | {" "}
        <a target="_blank" href="https://www.instagram.com/vishnu_4721/">
          instagram
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;

