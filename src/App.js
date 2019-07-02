import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Landing} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
