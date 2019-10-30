import React from "react";

// import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			{/* <NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink> */}
			<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
				<div class="container">
					<div class="navbar-brand" href="#page-top">
						<img class="logo" src="../Downloads/SanduguanLogo.png" />
					</div>
					<a class="navbar-brand brand-name" href="#page-top">
						Sandugo
					</a>
				</div>
				<button
					class="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarItem"
					aria-controls="navbarItem"
					aria-expand="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarItem">
					<ul class="navbar-nav ml-auto">
						<li
							class="nav-item padding"
							data-toggle="modal"
							data-target="#login"
						>
							<a class="nav-link" href="#">
								Sign-up
							</a>
						</li>
						<li class="nav-item" data-toggle="modal" data-target="#SignUp">
							<button type="button" class="btn color-red">
								Login
							</button>
						</li>
					</ul>
				</div>
			</nav>

			<div class="modal modal fade" id="login">
				<div class="modal-dialog modal-md modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header d-block">
							<button type="button" class="close" data-dismiss="modal">
								&times;
							</button>
							<div class="modal-logo-div">
								<img
									className="modal-logo-img"
									src="img/SanduguanLogo.png"
								></img>
							</div>
							<div className="modal-title-div">
								<div class="flex-column">
									<h4 class="modal-title"> Sandugo</h4>
									<p style={{ lineHeight: "0.6rem" }}>Save Lives!</p>
								</div>
							</div>
						</div>
						<div class="modal-body">
							<div class="container">
								<h4 class="col-12 modal-title text-center">Login</h4>
								<form>
									<div class="form-group">
										<label for="usr">Username:</label>
										<input type="text" class="form-control" id="usr"></input>
									</div>
									<div class="form-group">
										<label for="pwd">Password:</label>
										<input
											type="password"
											class="form-control"
											id="pwd"
										></input>
									</div>
									<div class="form-group">
										<label class="form-check-label left">
											<input type="checkbox" value="Remember me"></input>{" "}
										</label>
									</div>
								</form>
								<div class="col-12 text-center">
									OR
									<br></br>
									<a href="#">
										<img
											src="img/facebook.png"
											style={{
												width: "30px",
												height: "30px",
												marginTop: "10px"
											}}
										></img>
									</a>
									<a href="#">
										<img
											src="img/google-plus.png"
											style={{
												width: "30px",
												height: "30px",
												marginTop: "10px"
											}}
										></img>
									</a>
									<a href="#">
										<img
											src="img/twitter.png"
											style={{
												width: "30px",
												height: "30px",
												marginTop: "10px"
											}}
										></img>
									</a>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<div class="col-10 text-left">
								Don't have an Account?
								<a href="#" class="red">
									{" "}
									SignUp
								</a>
							</div>
							<form action="login.html">
								<button type="submit" class="btn btn-danger">
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
