import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState("");
  const [tdata,setTData]=useState("");
  const inputChange =(e)=>{
    setData(e.target.value)
    console.log(e);
  }

 
  const textArea =(e)=>{
    setTData(e.target.value)
    console.log(e);
  }


  return (
    <>
      

       <h1>onChange</h1>
       <input value={data} onChange={inputChange} type="text" placeholder='Enter Text'/> <br />
    
    <textarea value={tdata} onChange={textArea} placeholder='Enter the Text' name="textarea" id="textarea" cols="20" rows="5"></textarea>
          
    </>
  )
}

export default App
