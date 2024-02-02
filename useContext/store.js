import React, {createContext, useContext} from "react"

export const initialState={
  session:{
    token:"secret",
    username:"Daily Tuition"
  },
  getToken:()=>initialState.session.token
}

const ThemeContext=createContext(initialState);

export const ThemeProvider=({children})=>{
  const [session, setSession] = useState(initialState.session)
  return(
    <ThemeProvider.Provider value={{session, setSession}}>
      {children}
    </ThemeProvider.Provider>
  )
}
export default ThemeContext;