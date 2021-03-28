import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Conditions from "./components/Conditions/Conditions";
import { ConditionsDetails } from "./components/Conditions/ConditionsDetails";


const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Conditions />
      </Route>
      <Route
        exact
        path="/conditionDetails/:label"
        render={(routeProps) => (
          <ConditionsDetails {...routeProps}  />
        )}
      />
    </Switch>
  </Router>
);

export default AppRoutes;
