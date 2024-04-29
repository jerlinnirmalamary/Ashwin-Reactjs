import React, { useEffect, useState } from 'react';
import UseTodo from '../../utils/UserTodo';
 
export default function Home() {
  const url= 'https://jsonplaceholder.typicode.com/todos';
  const [todo,loading] = UseTodo(url);

  if(loading){
    return <div>Loading....</div>
  }
  return (
    <div>
      <ul>
        {todo.map(todo =>(
          <li key={todo.id}>{todo.title}</li>
      ))}</ul>
    </div>
  )
}
