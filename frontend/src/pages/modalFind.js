import React, { Col } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalFind = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Find a Donor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="blood_type_of_patient">
            <Form.Label>Patient Blood Type</Form.Label>
            <Form.Control as="select" required>
              <option value="">Choose...</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">AB+</option>
              <option value="4">AB-</option>
              <option value="5">B+</option>
              <option value="6">B-</option>
              <option value="7">O+</option>
              <option value="8">O-</option>
            </Form.Control>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="first_name" className="mr-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Nathan" />
            </Form.Group>

            <Form.Group as={Col} controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Awit" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="medical_institution_id">
            <Form.Label>Medical Institution</Form.Label>
            <Form.Control as="select" required>
              <option value="">Choose...</option>
              <option value="1">Chong Hua</option>
              <option value="2">Cebu Doctors</option>
              <option value="3">Cebu City Medical</option>
            </Form.Control>
          </Form.Group>

          <Form.Group id="is_willing_for_transfusion">
            <Form.Check type="checkbox" label="For Transfusion" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFind;
