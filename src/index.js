import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
//import Myapp2 from "./Myapp2";
import App from "./App";
import Mycontent from "./maincontent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

var Pranav = document.getElementById("app1");
ReactDOM.render(
  <ul>
    <li>1</li>
    <li>3</li>
    <li>2</li>
  </ul>,
  Pranav
);

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>3</li>
      <li>2</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("app2"));

ReactDOM.render(<Mycontent />, document.getElementById("app3"));
