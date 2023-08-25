import logo from './logo.svg';
import './App.css';
import React from 'react';


// const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppOne1 = React.lazy(() => import("host/test2"));


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CounterAppOne /> */}
        <CounterAppOne1 />
      </header>
    </div>
  );
}

export default App;
