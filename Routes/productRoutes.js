const express = require("express");
const router = express.Router();

//insert model
const Product = require("../Model/productModel");

//insert User Contraller
const ProductController = require("../Controllers/productControllers");

//route path create
router.get("/", ProductController.getAllProducts); //get data
router.post("/", ProductController.addProducts); //insert data
router.get("/:id", ProductController.getById); //get by id
router.put("/:id", ProductController.updateProduct); //update by id
router.delete("/:id", ProductController.deleteProduct); //delete by id

//export
module.exports = router;
