// import { useRef } from 'react';
import './App.css';
import RefState from "./component/RefState";
function App() {
//   // const inputRef =useRef("");
//   // const usertext=useRef("jerlin....")
//   // const refadd=()=>{
//   //   inputRef.current.focus();
//   // }
  return (
//     <>
//   {/* <h1>Useref</h1>
//   <input type="text" ref={inputRef} placeholder='Enter the text'/> <br /> <br />
//   <button onClick={refadd}>Click focus</button>
//   <h2>{usertext.current}</h2> */}
  
    <RefState />
//     </>
  )
}
export default App;














// import React from 'react';
// import { useRef } from 'react';

// export default function App() {
//   const ref=useRef();
//   const refText=useRef("Jerlin");
//   const addRef=()=>{
//     ref.current.focus();
//   }
//   return (
// <>
//     <input type="text" placeholder='Enter the text' ref={ref}/> <br />
//     <button onClick={addRef}>Click</button>
//     <h3>{refText.current}</h3>
// </>
//   )
// }

