import {useSyncExternalStore} from 'react';

// when the event 'resize' from window happen, in width is stored 'window.innterWidth'
export default function App(){
const width=useSyncExternalStore((listener)=>{
  window.addEventListener('resize', listener)
  return ()=>{
    window.removeEventListener('resize', listener)
  }
},()=>window.innerWidth)

return<div>
  <p>Size:{width}</p>
</div>
}