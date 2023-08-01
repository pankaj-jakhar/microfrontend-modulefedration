import logo from './logo.svg';
import './App.css';
import React from 'react';


const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterAppOne />
      </header>
    </div>
  );
}

export default App;
