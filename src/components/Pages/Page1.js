import React, { useState } from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";

import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page1">
      <Container className="h-100">
        <Row>
          <Card>
            <Card.Header>Source Entity Selection</Card.Header>
            <Card.Body>
              <div className="text-left">
                <Form>
                  <Row>
                    <Col sm={6}>
                      <div className="form-group">
                        <Form.Label>Data Source Type</Form.Label>
                        <Form.Select aria-label="" disabled={false}>
                          <option>{""}</option>
                          <option value={"RDBMS"}>RDBMS</option>
                          <option value={"FILE"}>FILE</option>
                        </Form.Select>
                      </div>
                      <div>
                        <Form.Label>Data Source Connection</Form.Label>
                        <Form.Select>
                          <option>{""}</option>
                          <option>dsc1</option>
                          <option>dsc2</option>
                        </Form.Select>
                      </div>
                      <div>
                        <Form.Label>Create Source Connection</Form.Label>
                        <Form.Select></Form.Select>
                      </div>
                      <div>
                        <Form.Label>Data Target Connection</Form.Label>
                        <Form.Select>
                          <option>{""}</option>
                          <option>dtc1</option>
                          <option>dtc2</option>
                        </Form.Select>
                      </div>
                    </Col>
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

export default Page1;
