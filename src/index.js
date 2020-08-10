import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Header from "./component/Header";
import Deadlines from "./component/Deadlines";
import Tasks from "./component/Tasks";
import Reports from "./component/Reports";
import Clients from "./component/Clients.tsx";
import Quotes from "./component/Quotes"
import EngagementLetter from "./component/EngagementLetter";

ReactDOM.render(
  <Router history={history()}>
    <Switch>
      <Route exact path="/" render={() => <App />} />
      <Route
        exact
        path="/tasks"
        activeClassName="is-active"
        render={() => (
          <Header>
            <Tasks />
          </Header>
        )}
      />
      <Route
        exact
        path="/deadlines"
        render={() => (
          <Header>
            <Deadlines />
          </Header>
        )}
      />
      <Route
        exact
        path="/reports"
        render={() => (
          <Header>
            <Reports />
          </Header>
        )}
      />

<Route
        exact
        path="/quotes"
        render={() => (
          <Header>
            <Quotes />
          </Header>
        )}
      />

     <Route
        exact
        path="/clients"
        render={() => (
          <Header>
            <Clients />
          </Header>
        )}
      />

<Route
        exact
        path="/engagement letter"
        render={() => (
          <Header>
            <EngagementLetter />
          </Header>
        )}
      />
    </Switch>
  </Router>,

  document.getElementById("root")
);
