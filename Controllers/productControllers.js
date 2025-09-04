//model ake data contro karanawa

//model eka insert karanawa
const Product = require("../Model/productModel");

//All data display
const getAllProducts = async (req, res, next) => {
  let products; //variable assign

  //check users are available
  try {
    products = await Product.find();
  } catch (err) {
    console.log(err);
  }

  //not found
  if (!products) {
    return res.status(404).json({ message: "products not found" });
  }

  //display all users
  return res.status(200).json({ products });
};

//data insert
const addProducts = async (req, res, next) => {
  // model eke dapu deta variable ekakata assign karanawa
  const { p_name, p_id, p_description, p_price } = req.body;

  let products;

  try {
    products = new Product({ p_name, p_id, p_description, p_price });
    await products.save();
  } catch (err) {
    console.log(err);
  }

  //dont insert products
  if (!products) {
    return res.status(404).json({ message: "unable to add products" });
  }
  return res.status(200).json({ products });
};

//get by id
const getById = async (req, res, next) => {
  const id = req.params.id; //productRouters - "/:id"

  let product;

  try {
    product = await Product.findById(id);
  } catch (err) {
    console.log(err);
  }

  //not available product
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  return res.status(200).json({ product });
};

//Update product
const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const { p_name, p_id, p_description, p_price } = req.body;

  let product;

  try {
    product = await Product.findByIdAndUpdate(id, {
      p_name: p_name,
      p_id: p_id,
      p_description: p_description,
      p_price: p_price,
    });
    product = await product.save();
  } catch (err) {
    console.log(err);
  }

  //not available product
  if (!product) {
    return res
      .status(404)
      .json({ message: "unable to update product details" });
  }
  return res.status(200).json({ product });
};

//Delete product
const deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  let product;

  try {
    product = await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  //not available product
  if (!product) {
    return res.status(404).json({ message: "unable to delete product" });
  }
  return res.status(200).json({ product });
};

exports.getAllProducts = getAllProducts; //route ekata export karagannawa
exports.addProducts = addProducts;
exports.getById = getById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
