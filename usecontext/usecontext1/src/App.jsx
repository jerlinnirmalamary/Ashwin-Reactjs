import { useState, createContext } from 'react';
import './App.css';
import First from './componets/First';
import Secand from './componets/Secand';


export const AppContext =createContext(null);

export default function App() {
  const [name,setName]=useState("")

  return (
    
<div className="app">
  <div>
  <h1>React js</h1>
    <h2>UseContext react hooks</h2>
   
  </div>

<AppContext.Provider value={{name,setName}}>    
  <First /> <br />
  <Secand />
</AppContext.Provider>
 
</div>
   
  )
}
