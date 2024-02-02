import {useState, useDeferredValue, useEffect} from 'react';

export default function App(){
  const [counter,setCounter] =useState(0);
  const deferredCounter=useDeferredValue(counter)

  useEffect(() => {
    console.log(`counter value: ${counter}`)
    console.log(`deferredCounter value: ${deferredCounter}`)
  })
  return (
    <div>
      <div>Deferred: {deferredCounter}</div>
      <div>Counter: {counter}</div>
      <button onClick={()=>setCounter(counter+1)}></button>
    </div>
  )
}