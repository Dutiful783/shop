const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./api/routes/user");
const authRoute = require("./api/routes/auth");
const productRoute = require("./api/routes/product");
const cartRoute = require("./api/routes/cart");
const orderRoute = require("./api/routes/order");
const stripeRoute = require("./api/routes/stripe");

const cors = require("cors");



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});