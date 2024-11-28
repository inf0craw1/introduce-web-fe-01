import React from "react";

import "./OutlineButton.scss";

const Link = ({ onClick, label }) => {
  return (
    <button
      className={"outline-button-container font-text-md"}
      label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Link;
