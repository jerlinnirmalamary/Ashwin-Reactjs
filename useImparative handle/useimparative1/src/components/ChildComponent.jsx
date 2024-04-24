import React, { useImperativeHandle, useRef } from 'react';

const ChildComponent = React.forwardRef((props,ref) => {
  const cinputRef=useRef();
  useImperativeHandle(ref,()=>({
        focusInput :()=>{
            console.log("clicked....");
            cinputRef.current.focus();
        }
  }))
    return (
    <div>
        Child
        <input ref={cinputRef} />
    </div>
  )
})
export default ChildComponent;
