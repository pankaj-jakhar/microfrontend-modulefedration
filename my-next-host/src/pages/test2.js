import { useState } from "react";

const Test = () =>{
    const [count, setCount] = useState(0);

    return (
      <div className="App">
          <div>
          Add by one each click <strong>APP-1</strong>
        </div>
        <div>Your click count : {count} </div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      <div className="container">This is my home page</div>
    </div>
    );
}
export default Test