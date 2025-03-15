import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  
  const addValue = ()=>{
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("You can set addValue up to 20");
    }
  }

  const removeValue = ()=>{
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("You can set removeValue up to 0");
    }
  }


  return (
    <>
     <h1>Be a fighter</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>increase value</button>
     <br />
     <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
