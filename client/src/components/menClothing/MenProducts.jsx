import React from "react";
import "./menProducts.css";
import { MenClothing } from "./MenItems";

function MenProducts() {
  const ClothesList = MenClothing.map((item, index) => {
    return (
      <div className="menProducts">
        <div className="wardrobe">
          <img src={item.img} alt="" />
          <span className="mens__price">{item.price}</span>
          <span className="menClothes__details">{item.details}</span>
          <button className="cart__button">Add To Cart</button>
        </div>
      </div>
    );
  });

  return <div className="menProducts">{ClothesList}</div>;
}

export default MenProducts;
