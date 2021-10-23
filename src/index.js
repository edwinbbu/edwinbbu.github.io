import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.css"; //Tailwind
import "remixicon/fonts/remixicon.css";
import "./assets/styles/index.css"; //Overrides
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
