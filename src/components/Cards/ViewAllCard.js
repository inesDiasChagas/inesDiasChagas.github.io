import React from "react";
import { useNavigate } from "react-router-dom";

import "./ViewAllCard.css";

const ViewAllCard = ({ imageId, title }) => {
  const imageUrl = process.env.PUBLIC_URL + "/" + imageId;
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/livros");
  };

  return (
    <div className='view-more-card' onClick={onClick}>
      {imageId && (
        <img src={imageUrl} alt={title} className='view-more-card-image' />
      )}
    </div>
  );
};

export default ViewAllCard;
