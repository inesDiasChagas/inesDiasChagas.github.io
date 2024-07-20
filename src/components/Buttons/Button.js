import React from "react";
import classNames from "classnames";
import { ButtonTypes } from "../../utils/types";

import "./Button.css";

const Button = ({ onClick, label, buttonType, imageId, className, type }) => {
  const imageUrl = process.env.PUBLIC_URL + "/" + imageId;
  const buttonClassName = classNames(`button ${className}`, {
    "hallow-button": buttonType === ButtonTypes.HallowButton,
    "hallow-squared-button": buttonType === ButtonTypes.HallowSquaredButton,
    "squared-button": buttonType === ButtonTypes.SquaredButton,
  });
  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {imageId && <img src={imageUrl} alt={label} />}
      {label}
    </button>
  );
};

export default Button;
