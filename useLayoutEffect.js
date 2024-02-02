import {useEffect,useLayoutEffect,useState} from 'react';

export default function App() {
  const [name,setName]= useState("Daily");

  useEffect(()=>{
    console.log("....se llama el useEffect")
  })
  useLayoutEffect(()=>{
    console.log("....se llama el useLayoutEffect")
    if(name==="Daily") {
      setName("John")
    }
  })
  return(
    <div>
      <h1>{name}</h1>
      <button onClick={()=> setName("tuition")}>Change State</button>
    </div>
  )
}
