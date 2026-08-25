import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 flex justify-center items-center h-screen'>
      <div className = "bg-white p-8 rounded-lg shadow-2xl">
        <h1 class="text-3xl text-gray-700 font-bold underline italic">
          Hello, Tailwind CSS in React!!
        </h1>
        <p className='text-2xl text-yellow-500 italic'>This is a simple example of Tailwind CSS in a React project..!!</p>
    </div>
    </div>
  )
}

export default App
