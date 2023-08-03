import "./App.css";
import React from "react";
import styled from 'styled-components'

import BlogList from "./components/BlogList.js";
import MainLogo from "./components/mainLogo/MainLogo";
import Nav from "./components/nav/Nav";

const menus = ['About', 'Class', 'Shop', 'Archive']

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;


function App() {
  return (
    <div className="App">
      {/* <MainLogo /> */}
      <Circle />
      <header className="App-header">
        <Nav menu={menus}/>
      </header>
    </div>
  );
}

export default App;