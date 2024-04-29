import UseTodo from '../../utils/UserTodo';


export default function Example() {
  const url= 'https://jsonplaceholder.typicode.com/todos';
  const [todo,loading] = UseTodo(url);

  if (loading) {
    return <div>Loading.......</div>
  }
  return (
    <div>
    <ul>
      {todo.map(todo =>(
        <li key={todo.id}>{todo.id}</li>
    ))}</ul>
  </div>
  )
};
