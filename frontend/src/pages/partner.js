import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

class Partner extends React.Component {
    render() {
        return (
            <div>
                <section className="container py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ padding: "40px 10px" }}>
                                Cebu Doctors University Hospital
                            </h2>
                            <Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
                                <Tab eventKey="appointments" title="Appointments">
                                    <div id="appointments" class="tab-pane fade active show">
                                        <div class="appointments-table">
                                            <div class="appointments-table__list">
                                                <ul class="list-group">
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                    <li class="list-group-item">Cras justo odio</li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                </ul>
                                            </div>
                                            <div class="appointments-table__profile"></div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="event" title="Create Blood Drive Event">
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
