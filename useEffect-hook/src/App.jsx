import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick = {incrementCount}>Increment</button>
    </div>
  )
}

export default App
