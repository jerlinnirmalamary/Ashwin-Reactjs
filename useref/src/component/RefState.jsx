import React, { useEffect } from 'react';
import { useRef, useState } from 'react';


export default function RefState() {
     const [count,setCount]=useState(0);
     const addRef=useRef(0);

    const state=()=>{
      setCount(count +1)
      console.log("state");

      addRef.current += 1;
      console.log("Ref");
    }

    const ref =()=>{
      // addRef.current += 1;
      // console.log("Ref");
    }

    useEffect(()=>{
      console.log("useeffect...1");
    },[])


  return (
    <div>
        <h1>hi hello</h1> 
        <h2>StateCount : {count}</h2>
        <h2>RefCount : {addRef.current}</h2>
        <button onClick={state}>State count +</button>
        <button onClick={ref}>Ref cout +</button>
    </div>
  )
}
