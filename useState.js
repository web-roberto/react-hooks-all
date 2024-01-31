//https://www.youtube.com/watch?v=ZAcASkz7pzE&list=PLynWqC6VC9KNS1QoKBHJdg3l-wSQ_NGC3&index=1&ab_channel=DailyTuition
import {useState} from 'react'

//state is boolean and I switch on/off
function App(){
 const[name,setName]=useState(true);
 const changeName=()=>{
  setName(!name)
 }
 return(
  <div className="App">
    <p>Channel name is {name?"daily":"tuition"}</p>
    <button onClick={changeName}>Click me</button>
  </div>
 )
}

//state is an object with some fields and I use Object.assign
function App2(){
  const[name,setName]=useState({firstname:"daily",lastname:"tuition"});
  const changeName=()=>{
   setName(Object.assign({},name).firstname="Updated") //Object.assign clona un objeto
  }
  return(
   <div className="App">
     <p>Channel name is {name.firstname}</p>
     <button onClick={changeName}>Click me</button>
   </div>
  )
 }

 //state is an object with some fields and I use spread operator
function App3(){
  const[name,setName]=useState({firstname:"daily",lastname:"tuition"});
  const changeName=()=>{
   setName({...name,firstname:'Updated'}) //spread operator
  }
  return(
   <div className="App">
     <p>Channel name is {name.firstname}</p>
     <button onClick={changeName}>Click me</button>
   </div>
  )
 }

 // use in a field of a Form
 function App4(){
  const[name,setName]=useState("");
  const changeName=(e)=>{
   e.preventDefault();
   console.log(name)
  }
  return(
   <div className="App">
    <form>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your name'/>
      <p>{name}</p>
      <button onClick={changeName}>Click me</button>
    </form>
   </div>
  )
 }
