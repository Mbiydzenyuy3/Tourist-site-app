// import "./Button.css";

import PropTypes from "prop-types";

export function Button({ onClick, label, style = "primary" }) {
  return (
    <button className={`button ${style}`} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.string,
};
