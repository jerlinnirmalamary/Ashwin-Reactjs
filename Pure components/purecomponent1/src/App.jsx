import './App.css';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  console.log('parent rendering .....');
  const [count , setCount]=useState(0)


  return (
    <div>
        <h1>count</h1>
        <h3>count: {count}</h3>
        <button onClick={()=>{setCount(count +1)}}>Click</button>
        <Home />
    </div>
  )
}

export default App;
