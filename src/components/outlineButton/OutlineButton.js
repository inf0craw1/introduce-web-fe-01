import React from "react";

import "./OutlineButton.scss";

const Link = ({ onClick, label, isMobile }) => {
  return (
    <button
      className={`outline-button-container ${
        isMobile ? "font-text-xs" : "font-text-md"
      }`}
      label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Link;
