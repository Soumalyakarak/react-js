
import './App.css'
import Card from './components/card'

function App() {
  let myObject = {
    Name:"Soumalya",
    Age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username = "soumalya" someObj={myObject} anotherObj={newArr} btnTxt = "click me"/>
    <Card username = "soumalya" btnTxt = "click me"/>
    </>
  )
}

export default App
