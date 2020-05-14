import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/layouts/NavBar";
import { Landing } from "./components/layouts/Landing";
import { LogIn } from "./components/auth/LogIn";
import { Register } from "./components/auth/Register";

function App() {
  return (
    <Router>
      <Fragment className="App">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
