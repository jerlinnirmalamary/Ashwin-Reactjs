import { useCallback } from 'react';
import './App.css';
import { useState } from 'react';

function App() {


const [count,setCount]=useState(0);

const increment=useCallback(()=>{
  setCount(count + 1)
  console.log("count increment........");
},[count])



// const increment=()=>{
//   setCount(count + 1)
//   console.log("count increment........");
// }


console.log("Components rerenders....");
  return (
    <div>
        <h1>Usecallback</h1>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
export default App;
