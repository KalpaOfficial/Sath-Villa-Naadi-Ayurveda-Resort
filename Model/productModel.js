const mongoose = require("mongoose");
const Schema = mongoose.Schema; //schema kiyana function eka athule thama input ganna details call karanne

//me function eka athule thama insert karanna details tika danne
const productSchema = new Schema({
  p_name: {
    type: String, //data type
    required: true, //validate
  },

  p_id: {
    type: String, //data type
    required: true, //validate
  },

  p_description: {
    type: String, //data type
    required: true, //validate
  },

  p_price: {
    type: Number, //data type
    required: true, //validate
  },
});

//mongoDB ekata modal eke data export karanawa table ekak vidihata
module.exports = mongoose.model(
  "productModel", //file name
  productSchema //function name
);
