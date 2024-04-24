import { useReducer } from 'react';
import './App.css';


// const initialState ={ count: 0}

// const reducer=(state,action)=>{
//   switch(action.type){
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return {count: 0 };
//     default :
//       return state
     
//   }
// }
// export default function App() {

//   const [state,dispatch]=useReducer(reducer,initialState)
  
//   return (
//     <>
    
//       <h1>Use Reducer Hook</h1> 
//       <button onClick={()=>dispatch({type:"increment"})}>Increment + </button> 
//       <h1>Count :{state.count}</h1>
//       <button onClick={()=>dispatch({type:"decrement"})}>Decrement -</button>  &nbsp; &nbsp;
//       <button onClick={()=>dispatch({type:"reset"})}>Reset</button> 
//     </>
    
//   )
// }
const initialReducer={count:0}

const reducer=((state,action)=>{
  switch (action.type) {
    case 'increment':
      return {count :state.count +1}
    case 'decrement':
      return {count :state.count -1}
    case 'reset':
      return {count : 0} 
    default:
      return state
  }
})

export default function App(){
    
  const [state,dispach]=useReducer(reducer,initialReducer)
  return(

      <div>
            <h1>Count:{state.count}</h1>
            <button onClick={()=>dispach({type:"increment"})}>Increment</button>
            <button onClick={()=>dispach({type:"reset"})}>reset</button>
            <button onClick={()=>dispach({type:"decrement"})}>Decrement</button>
      </div>
  
  );
}

