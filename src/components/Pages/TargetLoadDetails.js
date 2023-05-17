import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import "./TargetLoadDetails.css";

const TargetLoadDetails = () => {
  return (
    <div className="TargetLoadDetails">
      <Container className="h-100">
        <Row>
          <Card>
            <Card.Header>Target Load Details</Card.Header>
            <Card.Body>
              <div className="text-left">
                <Form>
                  <Row>
                    {/* <Col sm={7}> */}
                    <div className="form-group">
                      <Form.Label>Target Entity Name</Form.Label>
                      <Form.Control
                        type="text"
                        className="textbox1"
                        disabled={false}
                      />
                    </div>

                    <div className="form-group">
                      <Form.Label>Target Load Type</Form.Label>
                      <Form.Check
                        type="radio"
                        label="TRUNCATE"
                        name="TargetLoadDetails"
                      ></Form.Check>
                      <Form.Check
                        type="radio"
                        label="INSERT"
                        name="TargetLoadDetails"
                      ></Form.Check>
                      <Form.Check
                        type="radio"
                        label="INCREMENTAL"
                        name="TargetLoadDetails"
                      ></Form.Check>
                      <Form.Check
                        type="radio"
                        label="SCD TYPE II"
                        name="TargetLoadDetails"
                      ></Form.Check>
                    </div>
                    {/* </Col> */}
                    <div className="form-group">
                      <Row className="mb-3">
                        <Col>
                          <Form.Label>Data Quality Moniter</Form.Label>
                        </Col>
                        <Col>
                          <Form.Label>Alert</Form.Label>
                          <Form.Control
                            type="text"
                            className="textbox2"
                          ></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Abort</Form.Label>
                          <Form.Control
                            type="text"
                            className="textbox2"
                          ></Form.Control>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group">
                      <Row className="mb-3">
                        <Col>
                          <Form.Label>Record Count Changes Moniter</Form.Label>
                        </Col>
                        <Col>
                          <Form.Label>Alert</Form.Label>
                          <Form.Control
                            type="text"
                            className="textbox2"
                          ></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Abort</Form.Label>
                          <Form.Control
                            type="text"
                            className="textbox2"
                          ></Form.Control>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group">
                      <Form.Label>PHI/PII Identifier Status</Form.Label>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                      <Form.Label>Target Load Details</Form.Label>
                      <ToggleButtonGroup
                        type="toggle"
                        name="options"
                        className="toggle-button"
                      >
                        <ToggleButton value="yes">Yes</ToggleButton>
                        <ToggleButton value="no">No</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                      <Form.Check
                        type="checkbox"
                        label="Maintain a copy in DataLake"
                      ></Form.Check>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                      <Row>
                        <Col>
                          <Form.Label>Data Lake Connection</Form.Label>
                          <Form.Select aria-label="" disabled={false}>
                            <option>{""}</option>
                            <option>Connection1</option>
                            <option>Connection2</option>
                          </Form.Select>
                        </Col>
                        <Col>
                          <Form.Label>Data Lake File Format</Form.Label>
                          <Form.Select aria-label="" disabled={false}>
                            <option>{""}</option>
                            <option>CSV</option>
                            <option>PARQUET</option>
                            <option>AVRO</option>
                            <option>Source Format</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group">
                      <Form.Label>Data Lake Target Template</Form.Label>
                      <Form.Control
                        type="text"
                        className="textbox1"
                        disabled={false}
                      />
                    </div>
                  </Row>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button className="custom-button">Previous</Button>
              <Button className="custom-button">Next</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default TargetLoadDetails;
