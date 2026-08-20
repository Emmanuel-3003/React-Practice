import './App.css'
import useCounter from './useCounter';

function App() {
  const { count, inc, dec } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default App
