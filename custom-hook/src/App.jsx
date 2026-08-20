import './App.css'
import useCounter from './useCounter';

function App() {
  const { count, inc, dec, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick = {inc}>Increment</button>
      <button onClick = {dec}>Decrement</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}

export default App
