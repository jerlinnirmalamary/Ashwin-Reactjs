import React from 'react'

function DemoChild({sendData}) {
    const add=()=>{
        const words="hello text";
        sendData(words)
    }
  return (
    <div>
        Child
        <button onClick={add}>Click</button>
        
    </div>
   
  )
}

export default DemoChild;
