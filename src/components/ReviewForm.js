// import React from "react";

// const ReviewForm = (props) => {
//   console.log(props.list);
//   console.log("review",props.pagesAnswers["2"]);
//   return (
//     <div>
//       <h3>Review Answers</h3>
//       <div>
//         {props.list.map((obj, index) => (
//           console.log("index is", index+1),
//           console.log("obj_item",obj.items),
//           <div>
//             {obj.items.map((i) => (
//               <div>
//               <p>{i.label}</p>
//               <p>{props.pagesAnswers[toString({index}+1)]}</p>
//               </div>
//             ))}
//           </div>
          
//         ))}
//       </div>
//       {/* <div>
//         <p>{props.pagesAnswers}</p>
//       </div> */}
//     </div>
//   );
// };

// export default ReviewForm;


import { useState, useEffect, React } from "react";
import { FormItem } from "./FormItem";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

export const ReviewForm = (props) => {
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    if (Object.keys(answers).length > 1) {
      props.onPageUpdate(answers.index, answers);
      setAnswers({ index: props.step });
    } else {
      setAnswers({ index: props.step });
    }
  }, [props.step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
  };

  const [isReadOnly, setIsReadOnly] = useState(true);
  console.log(props.pagesAnswers)

   const [readOnlyStates, setReadOnlyStates] = useState({});

   const toggleReadOnlyState = (sectionIndex) => {
     setReadOnlyStates({
       ...readOnlyStates,
       [sectionIndex]: !readOnlyStates[sectionIndex],
     });
   };

  return (
    <div className="text-left">
      {props.list.map((section, index) => (
        <Card key={index} className="mb-3">
          <Card.Header>Section {section.section}</Card.Header>
          <Button
            style={{ position: "absolute", top: "0", right: "0" }}
            variant="link"
            className="text-secondary"
            onClick={() => toggleReadOnlyState(index)}
            // onClick={() => setIsReadOnly((prev) => !prev)}
          >
            <FaEdit />
            {/* {isReadOnly ? "Edit" : "Edit"} */}
          </Button>
          <Card.Body>
            <Form>
              <Row>
                {section.items?.map((item) => (
                  <Col key={item.index} sm={6}>
                    <FormItem
                      item={item}
                      onChange={updateAnswers}
                      answer={
                        props.pagesAnswers[section.section]
                          ? props.pagesAnswers[section.section][item.value]
                          : null
                      }
                      isReadOnly={!readOnlyStates[index]}
                      // isReadOnly={isReadOnly}
                    ></FormItem>
                  </Col>
                ))}
              </Row>
            </Form>
          </Card.Body>
        </Card>
      ))}
      <Button className="custom-button" onClick={props.onSubmit}>
        Submit
      </Button>
    </div>
  );
};


