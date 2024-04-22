import { createContext, useState } from 'react';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';


export const myContext=createContext(null)
function App() {
  const [name,setName]=useState("");

  return (
    <>
    <myContext.Provider value={{name,setName}}>
      <Demo1 />
      <Demo2 />

    </myContext.Provider>
    </>
  )
}

export default App;
