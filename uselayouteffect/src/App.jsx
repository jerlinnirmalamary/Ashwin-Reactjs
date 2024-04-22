// import './App.css';
// import { useLayoutEffect, useRef, useState } from 'react';

// function App() {
//   const [boxHeight,setBoxHeight]=useState(0);

//   const measureBox=()=>{
//     const height=boxRef.current.clientHeight;
//     setBoxHeight(height)
//   }

//   const boxRef =useRef();

//   useLayoutEffect(()=>{
//     measureBox()
//   },[])

//   return (
//     <>
//   <div>
//     <h1>useLayoutEffect</h1>
//     <div ref={boxRef} style={{backgroundColor:'gray',height:'200px'}}>box</div>
//     <p>Box Height: {boxHeight}px</p>
//   </div>

//     </>
//   )
// }

// export default App;



import React from 'react';
import { useEffect } from 'react';
import {useLayoutEffect, useState, useRef } from 'react';

export default function App() {
  const [height,setheight]=useState(0)
  const ref=useRef();

  const findHight=()=>{
    const fHeight=ref.current.clientHeight;
    setheight(fHeight)
  }

  useEffect(()=>{
    findHight()
  },[height])
  return (
    <div>
        <h1>useLayoutEffect</h1>
        <div ref={ref} style={{height:'100vh',maxHeight:'100vh',backgroundColor:'lightblue'}}>box</div>
        <p>Box Height  {height} px</p>
    </div>
  )
}
