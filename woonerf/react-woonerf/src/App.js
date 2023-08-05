import "./App.css";
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import BlogList from "./components/BlogList.js";
import MainLogo from "./components/mainLogo/MainLogo";
import Nav from "./components/nav/Nav";

import Home from "./components/Home";
import About from "./components/about/About";
import Class from "./components/class/Class";
import Shop from "./components/shop/Shop";
import Archive from "./components/archive/Archive";

const menus = ['A b o u t', 'C l a s s', 'S h o p', 'A r c h i v e']

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Nav menu={menus} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      {/* <MainLogo /> */}
      <header className="App-header">
        {/* <Nav menu={menus}/> */}
      </header>
    </div>  
  );
}

export default App;