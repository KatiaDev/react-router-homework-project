import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Importing the top-level component
import App from "./components/App";

// Importing the styles
import "./styles.less";

// 👉 STEP 1 - Import React Router's Router

ReactDOM.render(
  // Wrap the <App /> in a provider
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
