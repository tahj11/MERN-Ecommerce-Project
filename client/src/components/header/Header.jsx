import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h2>Grocery Deals</h2>
      <span className="sub-heading">Tahj/ Top Deals/ Grocery Deals</span>
      <div className="deals-circle">
        <div className="deal-info">
          <div className="circle">
            <span>Beverages</span>
          </div>
          <span className="deal-hover">Deals on Beverages</span>
        </div>
        <div className="deal-info">
          <div className="circle">
            <span>Snacking</span>
          </div>
          <span className="deal-hover">Deals on Snacks</span>
        </div>
        <div className="deal-info">
          <div className="circle">
            <span>Coffee</span>
          </div>
          <span className="deal-hover">Deals on Coffeee</span>
        </div>
        <div className="deal-info">
          <div className="circle">
            <span>Liquor</span>
          </div>
          <span className="deal-hover">Deals on Liquor</span>
        </div>
        <div className="deal-info">
          <div className="circle-deals">
            <span>All Deals</span>
          </div>
          <span className="deal-hover">All Deals</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
