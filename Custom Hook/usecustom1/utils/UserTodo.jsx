import React, { useEffect, useState } from 'react';

 function UseTodo(url) {
    const [todo,setTodo]=useState([]);
    const [loading,setloading]=useState(true);

  
    useEffect(()=>{

        const fetchTodos=async()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json();
                setTodo(data)
                setloading(false)
            }catch(error){
                console.log(error);
                setloading(false)
            }
        }
        fetchTodos()
    },[])

  return [todo, loading]
}

export default UseTodo;