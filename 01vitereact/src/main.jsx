import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function MyApp(){
  return(
    <div>
    <h1>my app....</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target = '_blank'>visit google</a>
)
const anotheruser = 'be a fighter'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click to open google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  reactElement
)
