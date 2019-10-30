import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Donor from "./pages/donor";
import Partner from "./pages/partner";
import Error from "./pages/error";
import Navigation from "./pages/header";
import Footer from "./pages/footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Donor" component={Donor} />
          <Route path="/Partner" component={Partner} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
