import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Masegolex"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Masego Ntuane{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Masegolex/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
