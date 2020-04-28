import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import Home from "./components/homPage/homePage";

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/home" component={Home}></Route>
      <Route path="/app" component={App}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
