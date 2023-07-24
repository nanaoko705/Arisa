import "./App.css";
import BlogList from "./components/BlogList.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlogList />
      </header>
    </div>
  );
}

export default App;