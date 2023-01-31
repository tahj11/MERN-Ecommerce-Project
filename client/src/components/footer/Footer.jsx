import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="heading">About Us</div>
            <a href="#">About Tahj Ecommerce</a>
            <a href="#">Careers</a>
            <a href="#">News & Blog</a>
            <a href="#">Investors</a>
            <a href="#"></a>
          </div>
          <div className="column">
            <div className="heading">Help</div>
            <a href="#">Tahj Help</a>
            <a href="#">Returns</a>
            <a href="#">Track Orders</a>
            <a href="#">Contact Us</a>
            <a href="#">Feedback</a>
            <a href="#">Accessibility</a>
            <a href="#">Security & Fraud</a>
            <a href="#">Team Member Services</a>
          </div>
          <div className="column">
            <div className="heading">Store</div>
            <a href="#">Pharmacy</a>
            <a href="#">Clinic</a>
            <a href="#">Optical</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
