import React from "react";
import Card from "./Card";

function Tours({ tours }) {
  return (
    <div>
      <div>
        <h1>Plan with Amit</h1>
      </div>
      <div>
        {tours.map((tours) => {
          // props.tours.map((tour) => {
          return <Card {...tours}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
