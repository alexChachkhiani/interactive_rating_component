import React from "react";
import { useState } from "react";
import "./Rate.css";

export default function Rate(props) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="main">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {stars.map((item, index) => {
        return (
          <button
            key={index}
            className="star"
            style={
              props.number == item
                ? { backgroundColor: "#FC7614", color: "#FFFFFF" }
                : {}
            }
            onClick={() => props.setNumber(item)}
          >
            {item}
          </button>
        );
      })}
      <button
        className="submit"
        onClick={() => {
          if (props.number) props.setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
