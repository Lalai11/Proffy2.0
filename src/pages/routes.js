import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default Routes;
