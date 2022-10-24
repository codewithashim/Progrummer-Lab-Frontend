import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
// import { AuthContext } from "./Context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
