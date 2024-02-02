
import { ThemeProvider } from "./store";
import Home from './Home'


function App2(){
 
  return(
    <div className="'App">
      <ThemeProvider>
         <Home/>
      </ThemeProvider>
    </div>
  )
}

export default App2;