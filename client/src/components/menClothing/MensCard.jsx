import React from "react";
import "./mensCard.css";

function MensCard({ image, title }) {
  return (
    <div className="mensCard">
      <div className="mens__card">
        <img src={image} alt="" />
        <span>{title}</span>
      </div>
    </div>
  );
}

export default MensCard;
