//https://www.youtube.com/watch?v=_2Gt33cUQec&list=PLynWqC6VC9KNS1QoKBHJdg3l-wSQ_NGC3&index=2&ab_channel=DailyTuition
//Life cycles: componentDidMount -> [], componentDidUpdate -> sin [] o [dependencia], componentWillUnMount -> return de dentro del useEffect


//I remove the React.StrictMode de index.js para que no duplique mis acciones y así controlo las veces que se ejecuta el useEffect
// when the value of a state or prop changes, the Componente is executed again an the useEffect is used to manage that situation

//I do console.log to se when it is executed when changing values in a state, prop....
useEffect(()=>{
  console.log('..... useEffect triggered')
},[comment])