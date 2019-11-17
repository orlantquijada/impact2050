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
import axios from "axios";

class Partner extends React.Component {
	render() {
		return (
			<div>
				<div className="mt-5"></div>
				<section className="container py-4">
					<div className="row height">
						<div className="col-md-12">
							<h2 style={{ padding: "40px 10px" }}>
								Cebu Doctors University Hospital
							</h2>
							<Tabs
								defaultActiveKey="appointments"
								id="uncontrolled-tab-example"
							>
								<Tab eventKey="appointments" title="Appointments">
									<div id="appointments" class="tab-pane fade active show">
										<div class="appointments-table">
											<div class="appointments-table__list">
												<ul class="list-group">
													<li
														className="list-group-item button--active"
														style={{ overflow: "hidden" }}
													>
														<a href="#">Jan Dale Amores</a>
													</li>
													<li className="list-group-item">
														<a href="#">Orlan Quijada</a>
													</li>
													<li className="list-group-item">
														<a action href="#2">
															Elram Espra
														</a>
													</li>
													<li className="list-group-item">
														<a href="#">Adrian Andrin</a>
													</li>
													<li className="list-group-item">
														<a action href="#1">
															Nathan Owen Awit
														</a>
													</li>
												</ul>
											</div>
											<div class="appointments-table__profile">
												<div className="card  " style={{ height: "30vh" }}>
													<div className="card-body" eventKey="#1">
														<h4 className="card-title">Nathan Owen Awit</h4>
														<h6>Blood Type: AB+</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tab>
								<Tab eventKey="event" title="Create Blood Drive Event">
									<div class="event-form">
										<form>
											<div className="form-group">
												<label for="eventName">Name of the Event</label>
												<input
													type="text"
													className="form-control"
													id="eventName"
													placeholder="Enter name of the event"
												/>
											</div>
											<div className="form-group">
												<label for="eventLocation">Event Location</label>
												<input
													type="text"
													className="form-control"
													id="eventLocation"
													placeholder="Please indicate complete address"
												/>
											</div>
											<div className="form-group">
												<label for="eventDate">Event Date</label>
												<input
													type="date"
													className="form-control"
													id="eventDate"
													placeholder="mm/dd/y"
												/>
											</div>
											<div className="form-group">
												<label for="eventContact">Contact number</label>
												<input
													type="text"
													id="eventContactNumber"
													className="form-control"
													placeholder="Phone number"
												/>
												<small
													id="eventContactNumber"
													className="form-text text-muted mb-4"
												></small>
											</div>
											<div className="form-group">
												<label for="eventDescription">Event Description</label>
												<div className="form-group">
													<textarea
														className="form-control"
														rows="5"
														id="comment"
													></textarea>
												</div>
												<small
													id="eventContactNumber"
													className="form-text text-muted mb-4"
												></small>
											</div>
										</form>
										<button type="button" className="btn btn-primary">
											Create Event
										</button>
									</div>
								</Tab>
							</Tabs>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Partner;
