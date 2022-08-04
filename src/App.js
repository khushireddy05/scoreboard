import './App.css';
import React from 'react';

function App() {
  
  return (
    <div>
    <div className="container">
        <div className="home home-bg">
          <h1>TEAM 1</h1>
          <div className="home-score">
            <h2 className="score h-score">0</h2>
          </div>
          <button className="btn-score h-btn hbtn1">+1</button>
          <button className="btn-score h-btn hbtn2">+4</button>
          <button className="btn-score h-btn hbtn3">+6</button>
          <div className="guest-score">
            <h2 className="score g-score">0</h2>
          </div>
          <button className="btn-score g-btn gbtn1">Wicket</button>
        </div>
        <div className="guest guest-bg">
          <h1>TEAM 2</h1>
          <div className="guest-score">
            <h2 className="score g-score">0</h2>
          </div>
          <button className="btn-score g-btn gbtn1">+1</button>
          <button className="btn-score g-btn gbtn2">+4</button>
          <button className="btn-score g-btn gbtn3">+6</button>
          <div className="guest-score">
            <h2 className="score g-score">0</h2>
          </div>
          <button className="btn-score g-btn gbtn1">Wicket</button>
        </div>
      </div>
      <p className="mess"></p>
      <div className="btns-container">
        <button className="new-btn btns">New Game</button>
        <button className="end-btn btns">End Game</button>
      </div>
      </div>
  );
}

export default App;

