import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Nav from "./components/nav/Nav";

import About from "./components/about/About";
import Class from "./components/class/Class";
import Shop from "./components/shop/Shop";
import Archive from "./components/archive/Archive";

const menus = ['A b o u t', 'C l a s s', 'S h o p', 'A r c h i v e']

function App() { 
  return (
    <Routes>
      <Route path="/" exact={true} element={<Nav menu={menus} />}/>
      <Route path="/about" element={<About />} />
      <Route path="/class" element={<Class />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>  
  );
}

export default App;