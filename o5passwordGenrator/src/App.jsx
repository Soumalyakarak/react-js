import { useCallback, useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*_+[]={}()";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,3);
      navigator.clipboard.writeText(password)
    //    .then(() => {
    //         alert("Password copied to clipboard!");
    //     }).catch(err => {
    //          console.error("Failed to copy: ", err);
    //     });

    // } else {
    //     alert("No password to copy!");
    // }

  }, [password]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-4'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput" className='text-white'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 ml-4'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput" className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
