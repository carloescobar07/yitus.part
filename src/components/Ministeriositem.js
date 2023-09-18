import React from "react";

function MinisteriosItem({ image, name, description }) {
  return (
    <div className="ministeriosItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  );
}

export default MinisteriosItem;