import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			{/* <NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink> */}
			<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#">
						Sandugo
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<a class="nav-link" href="#">
									Sign Up
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Log In
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<header class="masthead text-center text-white">
				<div class="masthead-content">
					<div class="container">
						<h1 class="masthead-heading mb-0">One Page Wonder</h1>
						<h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
						<a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">
							Learn More
						</a>
					</div>
				</div>
				<div class="bg-circle-1 bg-circle"></div>
				<div class="bg-circle-2 bg-circle"></div>
				<div class="bg-circle-3 bg-circle"></div>
				<div class="bg-circle-4 bg-circle"></div>
			</header>
		</div>
	);
};

export default Navigation;
