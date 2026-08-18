import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
  },[]);


  return (
    <div>
      <h1>Welcome</h1>
      <h3> X : {mousePosition.x} Y : {mousePosition.y}</h3>
    </div>
  )
}

export default App
