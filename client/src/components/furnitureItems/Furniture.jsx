import React from "react";
import "./furniture.css";
import { Furnitures } from "../discountProducts/Items";

function Furniture() {
  const renderList = Furnitures.map((item, index) => {
    return (
      <div className="discountCard" key={index}>
        <img src={item.img} alt="" className="discImg" />
        <span className="discPrice">{item.price}</span>
        <span className="discName">{item.name}</span>
        <button className="cart__button">Add to Cart</button>
      </div>
    );
  });

  return <div className="DisCard">{renderList}</div>;
}

export default Furniture;
