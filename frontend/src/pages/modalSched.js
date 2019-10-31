import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "./datePicker";

const ModalSched = props => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Schedule a Donation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="appointment_datetime">
            <Form.Label>Appointment Date</Form.Label>
            <DatePicker />
            {/* <Form.Control placeholder="12/31/1999" invisible /> */}
          </Form.Group>

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
            <Form.Check type="checkbox" label="Willing for Transfusion" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSched;
