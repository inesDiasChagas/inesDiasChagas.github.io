import React from "react";
import PropTypes from "prop-types";
import "./SectionWrapper.css";

function SectionWrapper({ children, className }) {
  const combinedClassName = `section-wrapper ${className}`;

  return <div className={combinedClassName}>{children}</div>;
}

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

SectionWrapper.defaultProps = {
  backgroundImage: null,
  className: "",
};

export default SectionWrapper;
