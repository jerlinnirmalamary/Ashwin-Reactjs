import React, { useContext } from 'react';
import { myContext } from '../App';
const Demo2=()=> {
    
    const {name}=useContext(myContext);
  return (
    <div>
        <h1>Name: {name}</h1>
    </div>
  )
}

export default Demo2;