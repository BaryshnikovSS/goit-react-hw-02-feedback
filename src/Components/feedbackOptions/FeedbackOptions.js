import React from "react";

const css = {
  backgroundColor: "#ffffff",
  border: "1px solid rgba(146, 144, 144, 0.564)",
  borderRadius: "4px",
  height: "20px",
  margin: "2px"
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(el => {
        return (
          <button
            style={css}
            key={el}
            type="button"
            name={el}
            onClick={onLeaveFeedback}
          >
            {el.charAt(0).toUpperCase() + el.slice(1)}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
