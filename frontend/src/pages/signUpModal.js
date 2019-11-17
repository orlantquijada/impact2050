import React, { Col } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignUpModel = props => {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title vcenter">
			<Modal.Header closeButton>
				<Modal.Title
					id="contained-modal-title-vcenter"
					style={{ height: "85px" }}
				>
					<div style={{ float: "left" }}>
						<img
							className="logo"
							style={{ width: "50px", height: "70px", paddingBottom: "10px" }}
							src={require("../img/SanduguanLogo.png")}
						></img>
						<span style={{ margin: "0px 0px 20px 10px" }}>Sandugo</span>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h5 class="col-12 modal-title text-center">Sign Up</h5>
				<Form>
					<Form.Group controlId="fname">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="name" placeholder="Enter firstname" />
					</Form.Group>
					<Form.Group controlId="lname">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="name" placeholder="Enter lastname" />
					</Form.Group>
					<Form.Group controlId="mname">
						<Form.Label>Middle Name</Form.Label>
						<Form.Control type="ame" placeholder="Enter middlename" />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="username" placeholder="Username" />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" />
					</Form.Group>
					<Form.Group controlId="contact">
						<Form.Label>Contact Number</Form.Label>
						<Form.Control type="contact" placeholder="Contact #" />
					</Form.Group>
					<div>
						<div className="row">
							<div className="col-md">
								Gender?
								<br></br>
								<Form.Group>
									<Form.Check type="checkbox" label="Male"></Form.Check>
								</Form.Group>
								<Form.Group>
									<Form.Check type="checkbox" label="Female"></Form.Check>
								</Form.Group>
							</div>
							<div className="col-md">
								<Form.Group controlId="bloodtype">
									<Form.Label>Blood Type</Form.Label>
									<Form.Control as="select">
										<option>A+</option>
										<option>A-</option>
										<option>B+</option>
										<option>B-</option>
										<option>AB+</option>
										<option>AB-</option>
										<option>O+</option>
										<option>O+</option>
									</Form.Control>
								</Form.Group>
							</div>
						</div>
					</div>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<div class="col-10 text-left">
					Have an Account?
					<a href="#" class="red">
						{" "}
						Login
					</a>
				</div>
				<NavLink to="/partner">
					<Button onClick={props.onHide}>SignUp</Button>
				</NavLink>
			</Modal.Footer>
		</Modal>
	);
};

export default SignUpModel;
