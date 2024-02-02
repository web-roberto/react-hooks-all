import React,{useContext} from 'react'
import ThemeContext from "./store"

const Home = () => {
  const {session,setSession}=useContext(ThemeContext)
  function handleClick(){
    console.log(session)
    setSession({...session,token:'new value'})
  }

  return (
    <div>
      <p>Authorize Token:{session.token}</p>
     <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home