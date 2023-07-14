import React, { Fragment } from 'react';
import './App.scss';
import Nav from './components/nav/Nav'
import Masthead from './components/masthead/Masthead';
import Footer from './components/footer/Footer';

const menus = ['about', 'news', 'gallery', 'shop', 'contact'];

function App() {
  return (
    <Fragment>
      <Nav menu={menus} />
      {/* <Masthead /> */}
      <Footer/>
    </Fragment>
  );
}

export default App;