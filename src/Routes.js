import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Auth from "./view/auth";

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center mt-5 pt-5">
          <CircularProgress />
        </div>
      }
    >
      <Switch>
        <Route path="/vehicles" exact component={() => <h1>Veiculos</h1>} />
        <Route path="/login" exact component={Auth} />
        <Route path="/" exact component={Auth} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
