import './App.css'
import { useState } from 'react'
import MultipleCounter from './MultipleCounter';
import SingleCounter from './SingleCounter';

function App() {
  
  return (
    <div>
      
      <SingleCounter />
      <br />
      -----------------------------------------------
      <br />
      <MultipleCounter />
    </div>
  );
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