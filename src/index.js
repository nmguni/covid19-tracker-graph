import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import Home from "./components/home/home";

ReactDOM.render(
  <Router>
    <div id="routing-container">
      <Route exact path="/" component={Home}></Route>
      <Route path="/app" component={App}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
