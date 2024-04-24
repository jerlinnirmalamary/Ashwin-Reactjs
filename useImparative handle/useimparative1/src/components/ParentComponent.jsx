import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const inputRef=useRef();
    const handleClick=()=>{
        inputRef.current.focusInput()
    }
    
  return (
    <div>
        Parent
        <ChildComponent ref={inputRef}/>
        <button onClick={handleClick}> Click</button>
    </div>
  )
}

export default  ParentComponent;