import './App.css'
import { useState } from 'react'

function App() {

  const [counters, setCounters] = useState([{id : 1, value : 0}]);

  const addCounters = () => {
    setCounters([...counters, {id : counters.length + 1, value : 0}]);
  };

  const incCounter = (id) => {
    setCounters(counters.map(counter => 
      counter.id === id ? {...counter, value : counter.value + 1} : counter)
    );
  };

  return (
    <div>
      <h1>Hello</h1>

      <button onClick = {addCounters}>Add Counters</button>
      <ul>
        {counters.map(counter =>(
          <li key = {counter.id}>
            Counter {counter.id} : {counter.value}
            <button onClick = {() => incCounter(counter.id)}>Increment</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

















// Normal counter with inc and dec.
// function App() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const inc = () => {
//     setCount(count + step);
//   }

//   const incTwice = () => {
    
//     // setCount(count + 1);
//     // setCount(count + 1);

//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   }

//   const dec = () => {
//     setCount(count - step);
//   }

//   return (
//     <div>
//       <h1>Hello {count} number of people!</h1>
//       <input type = 'number'
//              value = {step} 
//              onChange = {(e) => setStep(parseInt(e.target.value))}/>
//       <button onClick = {inc}>Increment</button>
//       <button onClick = {dec}>Decrement</button>
//       <button onClick = {incTwice}>+2</button>
//     </div>
//   )
// }

// export default App
