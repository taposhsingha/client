import React from "react";
import "./insertInfo.css";

const InsertInfo = (props) => {
  return (
    <div className="insert-info">
      <div className="insert-wrapper">
        <div className="insert-text">
          <h2>To insert info about {props.type},click here:</h2>
          <button>Insert {props.type}</button>
        </div>
      </div>
    </div>
  );
};

export default InsertInfo;
