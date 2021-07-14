import React from "react";
import "./styles.result.css";
const Result = ({ data }) => {
  let resultElem;
  if (data.result) {
    resultElem = `Result: ${data.result}`;
  } else {
    resultElem = "Game Not Begun";
  }

  return (
    <div className="results">
      <div className="score">
        <h5 className="user">Your Score: {data.userScore}</h5>
        <h5 className="bot">Bot's Score: {data.botScore}</h5>
      </div>
      <div className="choices">
        <h5 className="user">
          Your Choice: <span>{data.userChoice}</span>
        </h5>
        <h5 className="bot">
          Bot's Choice: <span>{data.botChoice}</span>
        </h5>
      </div>
      <h2>{resultElem}</h2>
    </div>
  );
};

export default Result;
