import React,{useReducer} from 'react'

const initialState={counter:0}
const useReducer = () => {

  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      Count: {state.count}
      <button onClick={()=> dispatch({type:'increase',payload:5})}>+</button>
      <button onClick={()=> dispatch({type:'decrease',payload:5})}>-</button>
    </div>
  )
}

function reducer(state,action){
  let newState;
  switch(action.type){
    case 'increase':
      newState={counter:state.counter + action.payload}
      break;
    case 'decrease':
      newState={counter:state.counter - action.payload}
      break;
    default: throw new Error()
  }
  return newState;
}

export default useReducer