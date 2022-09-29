import React from "react";
import "./card.css";
const Card = ({ el }) => {
  return (
    <div>
      <div>
        <link href="" rel="stylesheet" />
        <div className="infocardContainer">
          <div id="main">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJHzle8gO6_FGFJueNMJ5ouRv2R5tIF5kng&usqp=CAU" alt="" />
          </div>
          <div id="textbois">
            <h2>{el.name}</h2>
            <h4>
              Address: {el.address.city} - {el.address.street}
            </h4>
            <h4>Email: {el.email}</h4>
            <h4>Phone: {el.phone}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
