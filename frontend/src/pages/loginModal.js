import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginModal = props => {
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
				<div className="container">
					<h5 class="col-12 modal-title text-center">Login</h5>
					<Form>
						<Form.Group controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div class="col-10 text-left">
					Don't have an Account?
					<a href="#" class="red">
						{" "}
						Sign Up
					</a>
				</div>
				<NavLink to="/donor">
					<Button onClick={props.onHide}>Login</Button>
				</NavLink>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
