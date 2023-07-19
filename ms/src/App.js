import React, { Fragment } from 'react';
import './App.scss';
import Nav from './components/nav/Nav'
import Masthead from './components/masthead/Masthead';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import News from './components/news/News';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';

const menus = ['about', 'news', 'gallery', 'shop', 'contact'];

function App() {
  return (
    <Fragment>
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