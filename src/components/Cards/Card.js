import React from "react";
import "./Card.css";

const Card = ({ title, description, imageId }) => {
  const imageUrl = process.env.PUBLIC_URL + "/" + imageId;
  return (
    <div className='card'>
      {imageId && <img src={imageUrl} alt={title} className='card-image' />}
      {title && description && (
        <div className='card-content'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-description'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
