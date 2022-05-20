import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./css/fonts.scss"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/antd/dist/antd.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
