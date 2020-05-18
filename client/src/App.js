import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/layouts/NavBar";
import { Landing } from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import LogIn from "./components/auth/LogIn";

import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layouts/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
