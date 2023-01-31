import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="card__components">
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$3</span>
        <span className="details">Valentine Sale</span>
        <img
          src="https://img.freepik.com/premium-photo/festive-pink-flower-rose-composition-chocolate-heart-pink-candles-white-background-overhead-top-view-flat-lay-copy-space-birthday-mother-s-valentines-women-s-wedding-day-concept_511010-1228.jpg?w=2000"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$55</span>
        <span className="details">Back to School Sale</span>
        <img
          src="https://media.istockphoto.com/id/1381494689/photo/text-back-to-school-and-backpack-with-different-stationery-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=FNzwzmyVLz5NaT5BFU_5qIFBDG6nkK5tx_vehGgIPPo="
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$500</span>
        <span className="details">Gaming Devices</span>
        <img
          src="https://www.psu.com/wp/wp-content/uploads/2020/06/ps5-console-design-horizontal.jpg"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$4</span>
        <span className="details">Lay's Chips</span>
        <img
          src="https://media.istockphoto.com/id/458678045/photo/lays-potato-chips.jpg?s=612x612&w=0&k=20&c=vm2Gy6O7wr7PTIkdIntIiBZVUJiisHwyxcK6hYbrNT8="
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$10</span>
        <span className="details">Pepsi Crate 10 pack</span>
        <img
          src="https://thumbs.dreamstime.com/b/pepsi-can-white-background-chisinau-moldova-november-pepsi-can-white-background-pepsi-carbonated-soft-drink-produced-131299337.jpg"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$5</span>
        <span className="details">Frosted Flakes</span>
        <img
          src="https://www.pngitem.com/pimgs/m/414-4149983_frosted-flakes-cereal-png-frosted-flakes-transparent-png.png"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$6</span>
        <span className="details">Coffee</span>
        <img
          src="https://m.media-amazon.com/images/I/71DpoMAG6pL.jpg"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$8</span>
        <span className="details">Smithfield Bacon</span>
        <img
          src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00070800906215/bdb523fffcf57a550dae1709081a5176_large.png&width=512&type=webp&quality=90"
          alt=""
          className="product"
        />
      </div>
      <div className="card">
        <span className="sale">Sale</span>
        <span className="price">$5</span>
        <span className="details">Skittles</span>
        <img
          src="https://images.albertsons-media.com/is/image/ABS/960539202?$ng-ecom-pdp-mobile$&defaultImage=Not_Available"
          alt=""
          className="product"
          height="30px"
        />
      </div>
    </div>
  );
}

export default Product;
