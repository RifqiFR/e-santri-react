/*
  Ini entry point reactnya, disini dipake buat define react router
*/

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { APP_ROUTE } from "./routes/routes";
import PublicRoute from "components/PublicRoute";
import { AuthContextProvider } from "context/auth_context";

export const history = createBrowserHistory();

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          {APP_ROUTE.map((value, index) => {
            return (
              <PublicRoute
                key={value.name}
                isAdmin={value.isAdmin}
                isGuest={value.isGuest}
                path={value.path}
                component={value.component}
                exact={value.exact}
                isNotFound={value.isNotFound}
              />
            );
          })}
          {/* <Route path="/">
            <Redirect to="/login" />
          </Route> */}
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
