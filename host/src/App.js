import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <div>
        Add by one each click <strong>APP-1</strong>
      </div>
      <img src={logo} alt="test" />
      <div>Your click count : {count} </div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    <div className="container">This is my home page</div>
  </div>
  );
}

export default App;