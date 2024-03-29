const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
const app = express();
const cors = require("cors");
const menProduct = require("./routes/menProduct");
require("dotenv").config();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//Cors middleware
app.use(cors());

// Routes
app.use("/api/users", users);
app.use("/api/", menProduct);

app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
