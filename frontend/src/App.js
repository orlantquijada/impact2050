import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
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
					<Route path="/contact" component={Contact} />
					<Route component={Error} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
