import React from "react";

function Card({ id, image, info, price }) {
  return (
    <div className="card">
      <img src={image} alt="Uttrakhand" className="image"></img>
    </div>
  );
}

export default Card;
