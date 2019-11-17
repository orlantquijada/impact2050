import React from "react";
import {
	Tabs,
	Tab,
	ListGroup,
	Button,
	InputGroup,
	FormControl,
	Carousel
} from "react-bootstrap";
import ModalSched from "./modalSched";
import ModalFind from "./modalFind";

const Contact = () => {
	const [modalShowSched, setModalShowS] = React.useState(false);
	const [modalShowFind, setModalShowF] = React.useState(false);

	return (
		<div className="container" style={{ marginTop: "125px" }}>
			<div className="row mb-3">
				<div className="col-12 col-sm-3 mb-3 ">
					<div className="card  border-danger" style={{ height: "75vh" }}>
						<div className="card-body">
							<h4 className="card-title">Nathan Owen Awit</h4>
							<h6>Blood Type: AB+</h6>
							<ListGroup style={{ overflow: "hidden" }}>
								<ListGroup.Item variant="danger">
									Username: orlan4
								</ListGroup.Item>
								<ListGroup.Item>Email: asdf@asdf.com</ListGroup.Item>
								<ListGroup.Item variant="danger">
									Contact #: 0922-2833-416
								</ListGroup.Item>
								<ListGroup.Item>Points: 0</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-9">
					<Tabs
						defaultActiveKey="donate"
						className="nav justify-content-center mb-3 border-danger"
					>
						<Tab eventKey="donate" title="Donate">
							<div className="card mb-3">
								<div
									className="card-body  bg-danger rounded"
									style={{ height: "30vh" }}
								>
									<Carousel>
										<Carousel.Item>
											<img
												className="d-block"
												style={{ height: "25vh", width: "100%" }}
												src={require("../img/caro1.png")}
												alt="First slide"
											/>
											<Carousel.Caption>
												<h3 style={{ color: "#007bff" }}>BloodE</h3>
												<p style={{ color: "#007bff" }}>
													Become a part of the BloodE community
												</p>
											</Carousel.Caption>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block"
												style={{ height: "25vh", width: "100%" }}
												src={require("../img/caro2.jpg")}
												alt="Third slide"
											/>

											<Carousel.Caption>
												<h3 style={{ color: "#007bff" }}>Donate Now</h3>
												<p style={{ color: "#007bff" }}>
													World Blood Donor Day
												</p>
											</Carousel.Caption>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block"
												style={{ height: "25vh", width: "100%" }}
												src={require("../img/caro3.jpg")}
												alt="Third slide"
											/>

											<Carousel.Caption>
												<h3 style={{ color: "#007bff" }}>Be a Donor</h3>
												<p style={{ color: "#007bff" }}>Help those in need</p>
											</Carousel.Caption>
										</Carousel.Item>
									</Carousel>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 mb-3">
									<div className="card">
										<div
											className="card-body bg-danger rounded"
											style={{ height: "34vh" }}
										>
											<div className="card-title" style={{ color: " white" }}>
												Recipients
											</div>
											<ListGroup style={{ overflow: "hidden" }}>
												<ListGroup.Item>Chong Hua, Transfusion</ListGroup.Item>
												<ListGroup.Item>Chong Hua</ListGroup.Item>
												<ListGroup.Item>
													Cebu City Medical, Transfusion
												</ListGroup.Item>
											</ListGroup>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div
										className="card mb-3 border-danger"
										style={{ height: "24vh" }}
									>
										<div className="card-title m-2">Donation Schedules</div>
										<ListGroup
											className="card-title m-2"
											style={{ overflow: "hidden" }}
										>
											<ListGroup.Item>October 31, 2019</ListGroup.Item>
											<ListGroup.Item>December 31, 2019</ListGroup.Item>
										</ListGroup>
									</div>
									<Button
										className="col-12 p-3"
										variant="outline-danger"
										onClick={() => setModalShowS(true)}
									>
										Schedule
									</Button>

									<ModalSched
										show={modalShowSched}
										onHide={() => setModalShowS(false)}
									/>
								</div>
							</div>
						</Tab>
						<Tab eventKey="find" title="Find">
							<div
								style={{
									width: "200px",
									display: "table",
									marginLeft: "auto",
									marginRight: "auto"
								}}
							>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<Button variant="outline-danger">Blood Type:</Button>
									</InputGroup.Prepend>
									<FormControl aria-describedby="basic-addon1" />
								</InputGroup>
							</div>
							<div
								className="card mb-3 border-danger"
								style={{ height: "40vh" }}
							>
								<ListGroup
									className="col-12 p-0"
									style={{
										overflow: "hidden"
									}}
								>
									<ListGroup.Item variant="danger" action href="#link1">
										Chong Hua (A-,O+,B+)
									</ListGroup.Item>
									<ListGroup.Item variant="danger" action href="#link2">
										Cebu Doctors (AB-,O-)
									</ListGroup.Item>
									<ListGroup.Item variant="danger" action href="#link3">
										Cebu City Medical (O+,A-,B+,AB-,O-)
									</ListGroup.Item>
								</ListGroup>
							</div>
							<Button
								className="col-12 p-3"
								variant="outline-danger"
								onClick={() => setModalShowF(true)}
							>
								<h4>Find Donor</h4>
							</Button>

							<ModalFind
								show={modalShowFind}
								onHide={() => setModalShowF(false)}
							/>
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default Contact;
