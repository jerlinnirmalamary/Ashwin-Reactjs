import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Uselayouteffect1() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("  useEffect render");
    },[count])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect render");
    },[count])
  return (
    <div>

        <button onClick={()=>{setCount(count + 1)}}>Click +</button>
        <h1>{count}</h1>

    </div>
  )
}
