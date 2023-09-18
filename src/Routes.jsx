import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Switch>
  );
}

export default Routes;
