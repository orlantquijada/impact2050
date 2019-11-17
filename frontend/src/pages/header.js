import React from "react";
import {
	Tabs,
	Tab,
	ListGroup,
	Button,
	InputGroup,
	FormControl,
	Carousel,
	ButtonToolbar
} from "react-bootstrap";
import LoginModal from "./loginModal";
import SignUpModal from "./signUpModal";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const [modalShowSignUp, setModalShowS] = React.useState(false);
	const [modalShowLogin, setModalShowL] = React.useState(false);
	return (
		<div>
			{/* <NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink> */}
			<nav
				className="navbar navbar-expand-lg navbar-light fixed-top"
				id="mainNav"
			>
				<div className="container">
					<div className="navbar-brand" href="#page-top">
						<NavLink to="/">
							<img
								className="logo"
								style={{ width: "80px", height: "80px", margin: "0px" }}
								src={require("../img/SanduguanLogo.png")}
							></img>
							<a className="navbar-brand brand-name" href="#page-top">
								Sandugo
							</a>
						</NavLink>
					</div>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarItem"
						aria-controls="navbarItem"
						aria-expand="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarItem">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Button
									variant="link"
									onClick={() => setModalShowS(true)}
									style={{
										textDecoration: "none",
										color: "#a5243d"
									}}
								>
									Sign Up
								</Button>
								<SignUpModal
									show={modalShowSignUp}
									onHide={() => setModalShowS(false)}
								/>
							</li>
							<li className="nav-item">
								<Button
									variant="outline-danger"
									onClick={() => setModalShowL(true)}
								>
									Login
								</Button>
								<LoginModal
									show={modalShowLogin}
									onHide={() => setModalShowL(false)}
								/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
