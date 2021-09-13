import React from "react";

function Button({ submitButton, children, disabled = false, ...props }) {
  return (
    <button
      {...props}
      className="btn btn-primary"
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
