import React from "react";
import { Carousel, Button } from "react-bootstrap";
import SignUpModal from "./signUpModal";

const home = () => {
	return (
		<div>
			<header className="backg">
				<div className="container d-flex h-100 align-items-center">
					<div className="mx-auto text-center">
						<span style={{ color: "#a5243d" }}>Save A Life</span>
						<h1
							className="mx-auto my-0 text-uppercase"
							style={{ color: "#a5243d" }}
						>
							Donate, Search, and Save a Life
						</h1>
						<br></br>
						{/* <Button
							variant="outline-danger"
							onClick={() => setModal(true)}
							style={{
								textDecoration: "none",
								color: "#a5243d"
							}}
						>
							Donate Now
						</Button>
						<SignUpModal show={modalShow} onHide={() => setModal(false)} /> */}
					</div>
				</div>
			</header>

			<section className="content" id="content">
				<div className="container">
					<div className="section-head justify-content-center text-center row">
						<div className="col-12 col-md-10 mb50">
							<h1 style={{ marginBottom: "15px" }}>
								Easy Access and Transaction
							</h1>
							<p>
								With connections from multiple hospitals, LGU's and NGO's, we
								can provide you information on what blood type is available
								anytime of the day.
							</p>
						</div>
					</div>
				</div>
				<br></br>

				<div className="container-fluid">
					<div className="row">
						<div class="col-lg-4 justify-content-center text-center">
							<img
								src={require("../img/blood-donation.png")}
								style={{
									height: "300px;",
									width: "250px",
									margin: "60px 0px 40px 0px"
								}}
							></img>
							<h3 className="name-links">Donor</h3>
							<p className="name-info">
								Time to donate another blood? Worry it would just be banked and
								used later? We got you. With our partner hospitals and
								organizations. You can donate immediately to those who readily
								need it, and we'll notify you too!
							</p>
						</div>

						<div className="col-lg-4 justify-content-center text-center">
							<img
								class="receipt"
								src={require("../img/idle.png")}
								style={{
									height: "350px",
									width: "200px",
									margin: "0px 80px 0px 100px"
								}}
							></img>
							<h3 className="name-links">Receiptients</h3>
							<p className="name-info">
								Save yourself or your family on going from different hospitals,
								or appealing on social media and on radion stations to check,
								and ask for donors.
							</p>
						</div>

						<div class="col-lg-4 justify-content-center text-center">
							<img
								src={require("../img/hospital.png")}
								style={{
									height: "300px",
									width: "300px",
									margin: "50px 0px 0px 0px"
								}}
							></img>
							<h3 className="name-links">Hospital / Organization</h3>
							<p className="name-info">
								Requesting for blood is as hard for an individual. Include the
								disgust of patients to not have adequate supply of blood at
								crucial times. Worry not we can give you if not constant stream
								of donators everyday!
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="content" id="content1">
				<div className="container">
					<div className="row car">
						<div
							className="col-md-4 justify-content-center mx-auto"
							style={{ margin: "220px 0px 250px 0px" }}
						>
							<h2>Convenient</h2>
							<p>
								Offers donors and patients real-time locations of blood drives,
								hospitals, and clinics in where they can donate or look for
								specific blood.
							</p>
						</div>
						<div className="col-md-8 mx-auto">
							<Carousel id="carousel">
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/1.png")}
										alt="First slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/2.png")}
										alt="Second slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/3.png")}
										alt="Third slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/4.png")}
										alt="First slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/5.png")}
										alt="Second slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/6.png")}
										alt="Third slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={require("../img/7.png")}
										alt="Third slide"
										style={{ width: "1000px", marginTop: "100px" }}
									/>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
			</section>

			<section className="content more-content" id="content2">
				<div className="container">
					<div className="row justify-content-center no-gutters">
						<div className="col-lg-6">
							<img className="img-fluid" src={require("../img/bill.jpg")}></img>
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className=" text-center h-100 project">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-right">
										<h4 className="text-black">Point Sytem</h4>
										<p className="mb-0 text-black-50 m-content-p">
											Gain points everytime you donate where your accumulated
											points can be traded for discounts in medical facilities.
										</p>
										<hr className="d-lg-block line mr-0"></hr>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
						<div className="col-lg-6">
							<img className="img-fluid" src={require("../img/bd.jpg")}></img>
						</div>
						<div className="col-lg-6">
							<div className="text-center h-100 project">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-left">
										<h4 className="text-black">Hassle Free</h4>
										<p className="mb-0 text-black-50 m-content-p">
											Checking for available blood on blood banks or on
											hospitals have never been easier. You are just one tap
											away from saving people! Most of all, lesser paperworks.
										</p>
										<hr className="d-lg-block line ml-0"></hr>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default home;
