import React from "react";
import DiscountProducts from "../discountProducts/DiscountProducts";
import Appliances from "../appliances/Appliances";
import Furniture from "../furnitureItems/Furniture";
import "./productArray.css";

function ProductArray() {
  return (
    <>
      <div className="Box">
        <div className="card__discount">
          <span className="details">Discounted Items</span>
        </div>
        <DiscountProducts />
      </div>
      <div className="Box">
        <div className="card__discount">
          <span className="details">Appliances</span>
        </div>
        <Appliances />
      </div>
      <div className="Box">
        <div className="card__discount">
          <span className="details">Furniture</span>
        </div>
        <Furniture />
      </div>
    </>
  );
}

export default ProductArray;
