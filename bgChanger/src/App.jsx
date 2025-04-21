import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black');
  const [isVisible, setIsVisible] = useState(false);

  return (
      <div 
      className="fixed inset-0 w-screen h-screen m-0 p-0 duration-200" style={{backgroundColor:color}}>
        <div 
        className="fixed bottom-0 left-0 w-full h-16 z-10"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        >
        <div 
          className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row flex-wrap gap-3 shadow-lg bg-black backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300
            ${isVisible ? 'opacity-100 bottom-8' : 'opacity-0 -bottom-16'}`}
          >
          <button onClick={() => {setColor("red")}}className="outline-none px-4 py-2 bg-red-500 text-white rounded-md transition-transform duration-200 hover:scale-110">Red</button>
          <button onClick={() => {setColor("blue")}}className="outline-none px-4 py-2 bg-blue-500 text-white rounded-md transition-transform duration-200 hover:scale-110">Blue</button>
          <button onClick={() => {setColor("green")}}className="outline-none px-4 py-2 bg-green-500 text-white rounded-md transition-transform duration-200 hover:scale-110">Green</button>
          <button onClick={() => {setColor("yellow")}}className="outline-none px-4 py-2 bg-yellow-500 text-white rounded-md transition-transform duration-200 hover:scale-110">Yellow</button>
          <button onClick={() => {setColor("orange")}}className="outline-none px-4 py-2 bg-orange-300 text-white rounded-md transition-transform duration-200 hover:scale-110">orange</button>
          <button onClick={() => {setColor("indigo")}}className="outline-none px-4 py-2 bg-indigo-600 text-white rounded-md transition-transform duration-200 hover:scale-110">indigo</button>
          <button onClick={() => {setColor("violet")}}className="outline-none px-4 py-2 bg-violet-300 text-white rounded-md transition-transform duration-200 hover:scale-110">violet</button>
          <button onClick={() => {setColor("pink")}}className="outline-none px-4 py-2 bg-pink-100 text-white rounded-md transition-transform duration-200 hover:scale-110">pink</button>
        </div>
        </div>
      </div>
  )
}

export default App
