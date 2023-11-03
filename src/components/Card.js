import React, { useState } from "react";

function Card({ id, name, image, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}...`;
  function handleClick() {
    // Perform a Google search using the name prop
    console.log(id);
    const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(
      name
    )}`;
    window.open(searchQuery, "_blank");
  }
  return (
    <div className="card">
      <img src={image} alt={name} className="image"></img>
      <div className="tour-info">
        <h4 className="tour-price">₹{price}</h4>
        <h3 className="tour-name">{name}</h3>
      </div>
      <div className="description">
        {description}
        <span className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? `Show Less` : `Read More`}
        </span>
      </div>
      <button className="btn-red" onClick={handleClick}>
        Interested
      </button>
      <button className="btn-notI" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
