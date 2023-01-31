import React from "react";
import MensCard from "./MensCard";
import MensHeader from "./MensHeader";
import Footer from "../footer/Footer";
import "./men.css";
import MenProducts from "./MenProducts";

function Men() {
  return (
    <div className="Menu">
      <div className="mens__menu">
        <MensHeader />
        <MensCard
          image="https://www.travelandleisure.com/thmb/S69kt1Pi8L4lyav9dg_UtAGpaj8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Travel-Clothes-for-Men-TL-tout-f3babde88a844584abc1e16f87e3e937.jpg"
          title="New Year, Always a great Vibe"
        />
        <MensCard
          image="https://media.gq.com/photos/599b39c85a1deb7d91dc6ff5/master/pass/gq-selects-september-2017-tout.jpg"
          title="Get Your Summer Outfits"
        />
        <MenProducts />
      </div>
      <Footer />
    </div>
  );
}

export default Men;
