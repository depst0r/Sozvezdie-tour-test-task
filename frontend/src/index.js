import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import moment from "moment";
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(moment("5-5-2022").format("DD-MM"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
