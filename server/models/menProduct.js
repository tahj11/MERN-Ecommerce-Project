const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = MenProduct = mongoose.model("menProducts", menProductSchema);
