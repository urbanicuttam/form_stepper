import React from "react";

const ReviewForm = (props) => {
  console.log(props.list);
  console.log(props.pagesAnswers);
  return (
    <div>
      <h3>Review Answers</h3>
      <div>
        {props.list.map((obj) => (
          <div>
            {obj.items.map((i) => (
              <p>{i.label}</p>
            ))}
          </div>
        ))}
      </div>
      {/* <div>
        <p>{props.pagesAnswers}</p>
      </div> */}
    </div>
  );
};

export default ReviewForm;
