import {useId} from 'react'
export default function App(){
  return(
    <div>
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </div>
  )
}

function Checkbox(){
  const id=useId()
  console.log(id)
  return(
    <>
     <label htmlFor={id}>Do you like Daily Tuition?</label>
     <input id={id} type="checkbox" name="react"/>
    </>
  )
}