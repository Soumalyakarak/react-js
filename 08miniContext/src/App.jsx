import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>HIIIIII</h1>
      <Login/>
      <profile/>
    </UserContextProvider>
  )
}

export default App
