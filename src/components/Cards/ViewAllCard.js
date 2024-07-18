import React from "react";
import "./ViewAllCard.css";

const ViewAllCard = ({ imageId, title }) => {
  const imageUrl = process.env.PUBLIC_URL + "/" + imageId;

  return (
    <div className='view-more-card'>
      {imageId && (
        <img src={imageUrl} alt={title} className='view-more-card-image' />
      )}
    </div>
  );
};

export default ViewAllCard;
