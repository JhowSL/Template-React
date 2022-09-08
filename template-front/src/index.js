import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
  </React.StrictMode>
)
