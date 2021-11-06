import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ title, link }) => {
  return (
    <>
      <NavLink
        to={link}
        className="text-2xl text-red-200 hover:text-red-400 capitalize"
      >
        {title}
      </NavLink>
    </>
  );
};

export default Button;

Button.defaultProps = {
  title: "test",
  link: "/",
};

// Button.propTypes = {
//   title: PropTypes.string,
//   link: PropTypes.bool.isRequired,
// };
