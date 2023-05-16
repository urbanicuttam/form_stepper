import React from "react";
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";
import { Steps } from 'rsuite';


const styles = {
  width: '200px',
  display: 'inline-table',
  verticalAlign: 'top'
};

export const MultiStepProgressBar = (props) => {
  return (
//     <ProgressBar
//         percent={((props.step - 1) * 100) / 2}
//         filledBackground="#F7901D"
//       >
//         <Step transition="scale">
//           {({ accomplished, index }) => (
//             <div
//               className={`step ${accomplished ? "completed" : null}`}
//             >
//               Section 1
//             </div>
//           )}
//         </Step>
//         <Step transition="scale">
//           {({ accomplished, index }) => (
//             <div
//               className={`step ${accomplished ? "completed" : null}`}
//             >
//               Section 2
//             </div>
//           )}
//         </Step>
//         <Step transition="scale">
//           {({ accomplished, index }) => (
//             <div
//               className={`step ${accomplished ? "completed" : null}`}
//             >
//               Section 3
//             </div>
//           )}
//         </Step>
//       </ProgressBar>
 


  <>
    {/* <Steps current={1} vertical style={styles}>
      <Steps.Item title="Finished" />
      <Steps.Item title="In progress" />
      <Steps.Item title="Waiting" />
      <Steps.Item title="Waiting" />
    </Steps> */}

    <Steps current={(props.step-1)} vertical style={styles}>
      <Steps.Item title="Data Info" />
      <Steps.Item title="Address" />
      <Steps.Item title="Profile" />
    </Steps>
  </>
);
};
