const express = require("express");
const { createProducts, getProduct } = require("../controllers/products.controller");

const productRoute = express.Router();

productRoute.post("/create-product", createProducts);

productRoute.get("/get-product",getProduct);

module.exports={
    productRoute
}