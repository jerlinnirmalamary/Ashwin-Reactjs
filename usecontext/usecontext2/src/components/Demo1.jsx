import React, { useContext } from 'react';
import { myContext } from '../App';

const Demo1=()=> {
    const {setName}=useContext(myContext)
  return (
    <div>
        <input type="text" placeholder='Enter the text' onChange={e=> setName(e.target.value)}/>
        
    </div>
  )
}

export default Demo1;
