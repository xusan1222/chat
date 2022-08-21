import React from "react";
import ReactDOM from "react-dom";
import Context from "./components/Context";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context
       children={<Main />}
        />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
