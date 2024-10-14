import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
