import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data,setData]=useState(null);

  useEffect(()=>{
    const fetchData= async ()=>{
        try{
          const response= await fetch('https://jsonplaceholder.typicode.com/todos')
          const datas = await response.json();
          setData(datas)    
        }catch(error){
          console.error("Error Data",error);
        }
    }
    
    fetchData();
    return () =>{
      console.log("Clean up function goes");
    }

  },[])
 
console.log(data);
  return (   
    <div>
    {data?.map((d)=>(
     <div key={d.id}>
         <h2>ID - {d.id}</h2>
         <p>TITLE - {d.title}</p>        
     </div>
      ))}
    </div>
  )
}
export default App;



