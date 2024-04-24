import { useMemo, useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount]=useState(0);

  const handleInput=(e)=>{
    const inputValue=parseInt(e.target.value);
    setCount(inputValue);
  }

  const FindFactorial=(n)=>{
    let result =1;
   for(let i= 1; i<=n;i++){
      result *=i;
   }
   return result;
  }
  const memoized=useMemo(()=>FindFactorial(count),[count])

  return (
    <>
        {/* <h1>UseMemo Hook</h1> */}
        <input type="number" value={count} onChange={handleInput}/>
        <p>Factorial number is {count} is : {memoized}</p>
    </>
  )
}

