import React, { Fragment } from 'react';
import './App.scss';

// 홈 화면의 구성들 -> 나중에 home으로 묶어서 분리할 필요가 있을 듯
import Nav from './components/nav/Nav'
import Masthead from './components/masthead/Masthead';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import News from './components/news/News';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';

// 페이지 이동을 위함
import {Route, Routes} from "react-router-dom";
import BoardList from './components/routes/BoardList'; 
import Home from './components/routes/Home';


const menus = ['about', 'news', 'gallery', 'shop', 'contact'];

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<BoardList/>}/>
      </Routes>
      
      <Nav menu={menus} />
      <Masthead />
      <About />
      <News />
      <Shop />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;