import {useTransition,useState,useEffect} from 'react'

const largeList=[
  {id:1,product:"hand Mixer"},
  {id:2,product:"furniture"},
]

export default function App(){

const[isPending,startTransition]=  useTransition()
const [list, setList] = useState(largeList)
const [name,setName]=useState("")

function handleChange(e){
  setName(e.target.value) //en 1er plano y con prioridad
  startTransition(()=>{ //esto se ejecutará en background (2º plano), sin prioridad
    setList(largeList.filter(item => item.product.includes(e.target.value)))
  })
}

return(
  <div>
    <input type="text" value={name} onChange={handleChange} />
    {isPending?<div>Loading...</div>: list.map(item=><div key={item.id}>{item.product}</div>)}
  </div>
)
}
