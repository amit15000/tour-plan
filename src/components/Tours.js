import React from "react";
import Card from "./Card";

function Tours({ allPlaceCollection }) {
  return (
    <div>
      <div>
        <h1>Plan with Amit</h1>
      </div>
      <div>
        {allPlaceCollection.map((t) => {
          return <Card {...t}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
