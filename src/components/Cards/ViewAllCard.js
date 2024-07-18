import React from "react";
import "./ViewAllCard.css";

const ViewAllCard = ({ imageUrl, title }) => {
  return (
    <div className='view-more-card'>
      {imageUrl && (
        <img src={imageUrl} alt={title} className='view-more-card-image' />
      )}
    </div>
  );
};

export default ViewAllCard;
