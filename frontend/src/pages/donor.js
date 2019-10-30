import React from "react";
import {
  Tabs,
  Tab,
  ListGroup,
  Button,
  InputGroup,
  FormControl,
  Carousel,
  ButtonToolbar
} from "react-bootstrap";
import ModalSched from "./modalSched";

const Contact = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container" style={{ marginTop: "125px" }}>
      <div className="row mb-3">
        <div className="col-12 col-sm-3 mb-3">
          <div className="card" style={{ height: "75vh" }}>
            <div className="card-body">
              <h4 className="card-title">Name</h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-9">
          <Tabs
            defaultActiveKey="donate"
            className="nav justify-content-center mb-3"
          >
            <Tab eventKey="donate" title="Donate">
              <div className="card mb-3">
                <div className="card-body" style={{ height: "30vh" }}>
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
                <div className="col-12 col-sm-6">
                  <div className="card">
                    <div className="card-body" style={{ height: "34vh" }}>
                      dadasd
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card mb-3" style={{ height: "24vh" }}>
                    <ListGroup>
                      <ListGroup.Item>October 31, 2019</ListGroup.Item>
                      <ListGroup.Item>December 31, 2019</ListGroup.Item>
                      <ListGroup.Item>March 31, 2019</ListGroup.Item>
                    </ListGroup>
                  </div>
                  <Button
                    className="col-12 p-3"
                    variant="outline-danger"
                    onClick={() => setModalShow(true)}
                  >
                    Schedule
                  </Button>

                  <ModalSched
                    show={modalShow}
                    onHide={() => setModalShow(false)}
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
                    <Button variant="outline-secondary">Blood Type:</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" />
                </InputGroup>
              </div>
              <div className="card mb-3" style={{ height: "40vh" }}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    This one is a button
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Button
                className="col-12 p-3"
                variant="outline-danger"
                onClick={() => setModalShow(true)}
              >
                <h4>Find Donor</h4>
              </Button>

              <ModalSched show={modalShow} onHide={() => setModalShow(false)} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Contact;
