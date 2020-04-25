import React from "react";
import ReactDOM from "react-dom";

import { Flower } from "./Flower";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Flower />
  </React.StrictMode>,
  rootElement
);
