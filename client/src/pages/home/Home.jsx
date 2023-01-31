import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ProductArray from "../../components/productArray/ProductArray";
import Product from "../../components/products/Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Product />
      <ProductArray />
      <Footer />
    </div>
  );
}

export default Home;
