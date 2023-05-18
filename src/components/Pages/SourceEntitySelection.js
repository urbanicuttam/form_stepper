import React from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";

import "./SourceEntitySelection.css";

const SourceEntitySelection = () => {
  return (
    <div className="page1">
      <Container className="h-100">
        <Row>
          <Card>
            <Card.Header>Source Entity Selection</Card.Header>
            <Card.Body>
              <div className="text-left">
                <Form>
                  <Row className="mb-3">
                    <Col sm={6}>
                      <div className="form-group">
                        <Form.Label>Source Type</Form.Label>
                        <Form.Select aria-label="" disabled={false}>
                          <option>{""}</option>
                          <option value={"Query"}>Query</option>
                          <option value={"Table"}>Table</option>
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <div>
                      <Form.Label>Query</Form.Label>
                      <Form.Control
                        type="text"
                        className="textbox1"
                        disabled={false}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="form-group">
                        <Form.Label>Database Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="textbox1"
                          disabled={false}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Schema Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="textbox1"
                          disabled={false}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Table Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="textbox1"
                          disabled={false}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Bucket Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="textbox1"
                          disabled={false}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <Form.Label>Full File Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="textbox1"
                          disabled={false}
                        />
                      </div>
                    </Col>
                    <Col></Col>
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

export default SourceEntitySelection;
