import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Logic from './components/Logic';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Logic /> */}
      {/* <div className="" style={{ height: "100px" }}></div> */}
      <Game />
    </div>
  );
}

export default App;
