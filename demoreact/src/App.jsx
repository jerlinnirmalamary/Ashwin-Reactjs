// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
// const [count,setCount]=useState(0);

// useEffect(()=>{
//   document.title=`Count ${count}`
// },[count])
//   return (
//     <>
//     <h1>reat count</h1>
//       <h1>Count: {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//     </>
//   )
// }

// export default App




import React, { useState } from 'react'

export default function App() {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("");
  return (
    <div>
     
      <button onClick={()=> setCount(count -1)}>- Click</button>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>+ Click</button>
      <h1>{name}</h1>
      <input type="text" value={name} placeholder='Enter the text...' onChange={(e)=>setName(e.target.value)}/>

    </div>
  )
}
