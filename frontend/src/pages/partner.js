import React from "react";

const Partner = () => {
	return (
		<div>
			<section className="container py-4">
				<div className="row">
					<div className="col-md-12">
						<h2
							style={{
								padding: "40px 0"
							}}
						>
							Cebu Doctors University Hospital
						</h2>
						<ul id="tabsJustified" className="nav nav-tabs">
							<li className="nav-item">
								<a
									href=""
									data-target="#appointments"
									data-toggle="tab"
									className="nav-link small text-uppercase active"
								>
									Appointments
								</a>
							</li>
							<li className="nav-item">
								<a
									href=""
									data-target="#statistics"
									data-toggle="tab"
									className="nav-link small text-uppercase"
								>
									Statistics
								</a>
							</li>
							<li className="nav-item">
								<a
									href=""
									data-target="#create-event"
									data-toggle="tab"
									className="nav-link small text-uppercase"
								>
									Create a Blood Drive Event
								</a>
							</li>
						</ul>
						<br />
						<div id="tabsJustifiedContent" className="tab-content">
							<div id="appointments" className="tab-pane fade active show">
								<div className="appointments-table">
									<div className="appointments-table__list">
										<ul className="list-group">
											<li className="list-group-item">Cras justo odio</li>
											<li className="list-group-item">
												Dapibus ac facilisis in
											</li>
											<li className="list-group-item">Morbi leo risus</li>
											<li className="list-group-item">
												Porta ac consectetur ac
											</li>
											<li className="list-group-item">Vestibulum at eros</li>
											<li className="list-group-item">Cras justo odio</li>
											<li className="list-group-item">
												Dapibus ac facilisis in
											</li>
											<li className="list-group-item">Morbi leo risus</li>
											<li className="list-group-item">
												Porta ac consectetur ac
											</li>
											<li className="list-group-item">Vestibulum at eros</li>
											<li className="list-group-item">Cras justo odio</li>
											<li className="list-group-item">
												Dapibus ac facilisis in
											</li>
											<li className="list-group-item">Morbi leo risus</li>
										</ul>
									</div>
									<div className="appointments-table__profile"></div>
								</div>
							</div>
							<div id="statistics" className="tab-pane fade">
								<table className="table">
									<thead className="thead-dark">
										<tr>
											<th scope="col">Blood Type</th>
											<th scope="col">Requests</th>
											<th scope="col">Available</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>A+</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
										<tr>
											<th>A-</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
										<tr>
											<th>B+</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
										<tr>
											<th>B-</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
										<tr>
											<th>O+</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
										<tr>
											<th>O-</th>
											<th>26</th>
											<th>65</th>
											<th>Good</th>
										</tr>
									</tbody>
								</table>
							</div>
							<div id="create-event" className="tab-pane fade">
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
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Partner;
