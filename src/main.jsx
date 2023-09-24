import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// @ts-ignore comment above the line of code that is causing the error.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
