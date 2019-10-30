import React from "react";

const Footer = () => {
	return (
		<div>
			<section className="contact-section bg">
				<div className="container">
					<div className="row pt-5">
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-map-marked-alt text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Address</h4>
									<hr className="my-4"></hr>
									<div className="small text-black-50">
										KMC Cebu, 17th Floor, W Geonzon St, Cebu City, Cebu
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-map-marked-alt text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Email</h4>
									<hr className="my-4"></hr>
									<div className="small text-black-50">sandugo@gmail.com</div>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-3 mb-md-0">
							<div className="card py-4 h-100">
								<div className="card-body text-center">
									<i className="fas fa-map-marked-alt text-primary mb-2"></i>
									<h4 className="text-uppercase m-0">Contact</h4>
									<hr className="my-4"></hr>
									<div className="small text-black-50">09123456789</div>
								</div>
							</div>
						</div>
					</div>
					<div className="social d-flex justify-content-center">
						<a href="#" className="mx-2">
							<img src={require("../img/google.png")}></img>
						</a>
						<a href="#" className="mx-2">
							<img src={require("../img/facebook.png")}></img>
						</a>
						<a href="#" className="mx-2">
							<img src={require("../img/twitter.png")}></img>
						</a>
					</div>
				</div>
			</section>
			<footer className="bg small text-center text-white-50">
				<div className="container">Copyright &copy; Sandugo 2019</div>
			</footer>
		</div>
	);
};

export default Footer;
