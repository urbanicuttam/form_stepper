import { useState, useEffect, React } from "react";
import { FormItem } from "./FormItem";
import { Form, Row, Col } from "react-bootstrap";

export const MultiStepForm = (props) => {
  // store index number with the answers?
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    // check if the answers isn't empty
    if (Object.keys(answers).length > 1) {
      // update page answers
      props.onPageUpdate(answers.index, answers);
      // update page number locally
      setAnswers({ index: props.step })
    } else {
      // update page number locally
      setAnswers({ index: props.step })
    }
  }, [props.step])

  const updateAnswers = (value, category) => {
    setAnswers({...answers, [category]: value});
  }

  console.log(answers)
  return (
    <div className="text-left">
    <Form>
      <Row>
        {props.list[props.step - 1].items?.map((item, index) => (
          <Col key={index} sm={6}>
            <FormItem
              key={`${index}_${item.label}`}
              item={item}
              onChange={updateAnswers}
              answer={
                props.pagesAnswers[props.step]
                  ? props.pagesAnswers[props.step][item.value]
                  : null
              }
            />
          </Col>
        ))}
      </Row>
    </Form>
  </div>
  )
}
