import React, { Fragment } from 'react';
import './App.scss';
import Nav from './components/nav/Nav'

const menus = ['about', 'news', 'gallery', 'shop', 'contact'];

function App() {
  return (
    <Fragment>
      <Nav menu={menus} />
    </Fragment>
  );
}

export default App; 