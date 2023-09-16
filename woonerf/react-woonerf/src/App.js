import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Nav from "./components/nav/Nav";

import About from "./components/about/About";
import About_mobile from "./components/about/About_mobile";
import About_tablet from "./components/about/About_tablet";

import Class from "./components/class/Class";
import Class_moblie from "./components/class/Class_mobile";
import Class_tablet from "./components/class/Class_tablet";

import Shop from "./components/shop/Shop";
import Archive from "./components/archive/Archive";

import {useMediaQuery} from 'react-responsive';

const menus = ['A b o u t', 'C l a s s', 'S h o p', 'A r c h i v e']

function App() { 
  const isMobile = useMediaQuery({
    query : "(max-width:450px)"
  });
  const isTablet = useMediaQuery({
      query : "(max-width:768px)"
  });
  const isPc = useMediaQuery({
      query : "(min-width:769px)"
  });
  return (
    <Routes>
      <Route path="/" exact={true} element={<Nav menu={menus} />} />
      {isMobile && <Route path="/about" element={<About_mobile />} />}
      {isTablet && <Route path="/about" element={<About_tablet />} />}
      {isPc && <Route path="/about" element={<About />} />}

      {isMobile && <Route path="/class" element={<Class_moblie />} />}
      {isTablet && <Route path="/class" element={<Class_tablet />} />}
      {isPc && <Route path="/class" element={<Class />} />}
      
      {isMobile && <Route path="/shop" element={<Shop />} />}
      {isPc && <Route path="/shop" element={<Shop />} />}
      
      {isMobile && <Route path="/archive" element={<Archive />} />}
      {isPc && <Route path="/archive" element={<Archive />} />}

      
    </Routes>
  );
}

export default App;