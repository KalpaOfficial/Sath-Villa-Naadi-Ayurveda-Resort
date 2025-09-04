//app.js eke call karana ewa vitharai display wenne
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home/Home";
import Ayurveda from "./Component/Ayurveda/ayurveda";
import Product from "./Component/Ayurveda Product/products";
import Inquire from "./Component/Inquire/inquire";
import About from "./Component/About Us/about";

function App() {

  //js
  return (
    //html body
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/mainhome" element = {<Home/>}/>
          <Route path="/ayurveda" element = {<Ayurveda/>}/>
          <Route path="/products" element = {<Product/>}/>
          <Route path="/inquire" element = {<Inquire/>}/>
          <Route path="/about" element = {<About/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
