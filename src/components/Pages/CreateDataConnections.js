import React from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./CreateDataConnections.css";

const CreateDataConnections = () => {
  return (
    <div className="page1">
      <Container className="h-100">
        <Row>
          <Card>
            <Card.Header>Create Data Connections</Card.Header>
            <Card.Body>
              <div className="text-left">
                <Form>
                  <Row className="mb-3">
                    {/* <Col sm={6}> */}
                    <div className="form-group dst">
                      <Form.Label>Data Source Type</Form.Label>
                      <Form.Select aria-label="" disabled={false}>
                        <option>{""}</option>
                        <option value={"RDBMS"}>RDBMS</option>
                        <option value={"FILE"}>FILE</option>
                      </Form.Select>
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="form-group">
                        <Form.Label>Data Source Connection</Form.Label>
                        <Form.Select>
                          <option>{""}</option>
                          <option>dsc1</option>
                          <option>dsc2</option>
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Create Data Source Connection</Form.Label>
                        <div className="plus-button">
                          <FontAwesomeIcon icon={faPlus} />
                          <span>Create Data Source Connection</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="form-group">
                        <Form.Label>Data Target Connection</Form.Label>
                        <Form.Select>
                          <option>{""}</option>
                          <option>dtc1</option>
                          <option>dtc2</option>
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Create Data Target Connection</Form.Label>
                        <div className="plus-button">
                          <FontAwesomeIcon icon={faPlus} />
                          <span>Create Data Target Connection</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="form-group">
                        <Form.Label>Application</Form.Label>
                        <Form.Select>
                          <option>{""}</option>
                          <option>Application1</option>
                          <option>Application2</option>
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Create Application</Form.Label>
                        <div className="plus-button">
                          <FontAwesomeIcon icon={faPlus} />
                          <span>Create Application</span>
                        </div>
                      </div>
                    </Col>
                    {/* </Col> */}
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

export default CreateDataConnections;
