import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";

const URL = "http://Localhost:5000/products";

//fetchHandler eken thamai url eken data ganne
const fetchHandler = async() => {
  return await axios.get(URL).then((res) => res.data);
}

function products() {
//useState - set data
  const[products, setProducts] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setProducts(data.products));
  }, [])

  return (
    <div>
      <Nav />
      <h1>Products Desplay Page</h1>
    </div>
  );
}

export default products;
