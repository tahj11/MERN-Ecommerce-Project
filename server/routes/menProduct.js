const express = require("express");
const router = express.Router();
const menProduct = require("../models/menProduct");

//CREATE NEW PRODUCT
router.post("/mensProduct", async (req, res) => {
  const NewProduct = await new menProduct(req.body);
  try {
    const savedProduct = NewProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET ALL PRODUCTS
router.get("/mensProduct", async (req, res) => {
  try {
    const data = await menProduct.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET BY ID
router.get("/mensProduct/:id", async (req, res) => {
  try {
    const data = await menProduct.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
