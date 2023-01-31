import React from "react";
import "./menHeader.css";

function MensHeader() {
  return (
    <div className="mens__header">
      <h2>Men's Clothing</h2>
      <span className="header__span">
        Tahj / Clothing, Shoes / Men's Clothing
      </span>
      <div className="mens__cover">
        <div className="mens__deal">
          <div className="mens__circle">
            <img
              src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2022/03/Spring-Clothing-for-Men-765x453.png"
              alt=""
            />
          </div>
          <span className="mens__details">Men's Clothing Deal</span>
        </div>
        <div className="mens__deal">
          <div className="mens__circle">
            <img
              src="https://images.giordano.com//materiel/GIO/CN/workpage/GBShop/mobile/cate_banner/200904/newarrivals_men.jpg"
              alt=""
            />
          </div>
          <span className="mens__details">Men's Fresh Arrivals</span>
        </div>
        <div className="mens__deal">
          <div className="mens__circle">
            <img
              src="http://cdn.shopify.com/s/files/1/0162/2116/articles/Formal_outfits_1200x1200.jpg?v=1530026436"
              alt=""
            />
          </div>
          <span className="mens__details">Men's Formal</span>
        </div>
        <div className="mens__deal">
          <div className="mens__circle">
            <img
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2b9ebff3-5733-4747-9b7a-49c4a4c617b4/sportswear-tech-fleece-pullover-hoodie-tnngKk.png"
              alt=""
            />
          </div>
          <span className="mens__details">Sports Wear</span>
        </div>
        <div className="mens__deal">
          <div className="mens__circle">
            <img
              src="https://i0.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/0021_01805195_0009_f041-819x1024.jpeg?resize=550%2C688&ssl=1"
              alt=""
            />
          </div>
          <span className="mens__details">Men's Valentine's Style</span>
        </div>
      </div>
    </div>
  );
}

export default MensHeader;
