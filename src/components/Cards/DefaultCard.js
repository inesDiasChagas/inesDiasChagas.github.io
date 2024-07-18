import React from "react";
import classNames from "classnames";
import { CardTypes } from "../../utils/types";
import { useNavigate } from "react-router-dom";

import "./DefaultCard.css";

const DefaultCard = ({ imageId, title, type, description }) => {
  let navigate = useNavigate();
  const imageUrl = process.env.PUBLIC_URL + "/" + imageId;

  const onClick = () => {
    navigate("/livros");
  };

  const cardClass = classNames("card", {
    "card-with-content": type === CardTypes.DefaultCard,
    "card-without-content": type === CardTypes.ViewMore,
  });
  const imageClass = classNames({
    "card-image-with-content": type === CardTypes.DefaultCard,
    "card-image-without-content": type === CardTypes.ViewMore,
  });
  return (
    <div className={cardClass} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className={imageClass} />}
      {title && description && (
        <div className='card-content'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-description'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DefaultCard;
