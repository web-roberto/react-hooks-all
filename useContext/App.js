//https://www.youtube.com/watch?v=3CYc_N60nk4&list=PLynWqC6VC9KNS1QoKBHJdg3l-wSQ_NGC3&index=3&ab_channel=DailyTuition
//1.Create Context 2.Providing Context 3.Consuming Context
// Prop Drilling es pasar la información a través de los props. Esto es limitado
//1.Create Context 
// 2.Providing Context 
//3.Consuming Context

import {createContext, useContext} from "react"

const Context =createContext("Initial Value");

function App(){
  const value="My Context Value"
 
  return(
    <div className="'App">
      <Context.Provider value={value}>
         <MyComponent/>
      </Context.Provider>
    </div>
  )
}

function MyComponent(){
  const value=useContext(Context)
  return<span>{value}</span>
}

export default App;