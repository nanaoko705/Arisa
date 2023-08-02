import "./App.css";
import React from "react";

import BlogList from "./components/BlogList.js";
import MainLogo from "./components/mainLogo/MainLogo";
import Nav from "./components/nav/Nav";

const menus = ['About', 'Class', 'Shop', 'Archive']

function App() {
  return (
    <div className="App">
      <MainLogo />
      <header className="App-header">
        <Nav menu={menus}/>
      </header>
    </div>
  );
}

export default App;