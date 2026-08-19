import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [stateCount, setStateCount] = useState(0)
  const refCount = useRef(0);

  const stateInc = () => {
    setStateCount(stateCount + 1)
  };

  const refInc = () => {
    refCount.current = refCount.current + 1;
  };

  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hello World";
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <div>
      <h1>State Count : {stateCount}</h1>
      <button onClick = {stateInc}>Increment State</button>
      
      <h1>Ref Count : {refCount.current}</h1>
      <button onClick = {refInc}>Increment Ref</button>

      <input ref = {inputRef} type="text" placeholder='Focus Me' />
      <button onClick = {focusInput}>Focus</button>
    </div>
  )
}

export default App
