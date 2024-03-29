import "./App.css";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./Questions";
import {ReviewForm} from "./components/ReviewForm";

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  function getHeadingForStep(step) {
    switch (step) {
      case 1:
        return "Step 1 Heading";
      case 2:
        return "Step 2 Heading";
      case 3:
        return "Step 3 Heading";
      default:
        return "";
    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };
  console.log(pagesAnswers);
  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          {submitted ? (
            <Card>
              <Card.Body>
              {index == totalPagesCount && (
                  <ReviewForm
                    list={questions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                <p>Please review your answers !</p>
              </Card.Body>
              <Card.Footer>
                <Button className="custom-button" onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card>
          ) : (
            <Card>
              <Card.Header>{getHeadingForStep(index)}</Card.Header>
              <Card.Body> 
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button
                  className="custom-button"
                  onClick={prevButton}
                  disabled={index == 1}
                >
                  Previous
                </Button>
                <Button className="custom-button" onClick={nextButton}>
                  {index == totalPagesCount ? "Review & Submit" : "Next"}
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
