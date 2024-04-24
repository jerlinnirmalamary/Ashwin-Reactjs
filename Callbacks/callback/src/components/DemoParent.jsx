import React, { useState } from 'react'
import DemoChild from './DemoChild'

function DemoParent() {
    const [data,setData]=useState("");

    const reciveData=(d)=>{
        setData(d)
    }
  return (
    <div>
        DemoParent
        <h1>datas : {data}</h1>
        <DemoChild sendData={reciveData}/>
    </div>
  )
}

export default DemoParent;