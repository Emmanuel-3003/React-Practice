import { createContext, useContext } from 'react'
import './App.css'

const themeContext = createContext('light');

function App() {
  return (
  <div style = {{border: '2px solid black', padding: '20px'}}>
    <h2>App (Parent)</h2>
    <ComponentA/>
  </div>
  );
}

function ComponentA(){
  return (
  <div style = {{border: '2px solid blue', padding: '20px'}}>
    <h2>Component A (Child)</h2>
    <ComponentB />
  </div>
  );
}

function ComponentB(){
  return (
  <div style = {{border: '2px solid green', padding: '20px'}}>
    <h2>Component B (Grand Child)</h2>
    <ComponentC />
  </div>
  );
}

function ComponentC(){
  const theme = useContext(themeContext);

  return (
  <div style = {{border: '2px solid red', padding: '20px'}}>
    <h2>Component C (Great Grand Child)</h2>
    <p>Theme : {theme}</p>
  </div>
  );
}



export default App
