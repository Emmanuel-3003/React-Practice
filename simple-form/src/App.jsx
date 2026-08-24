import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name : '',
    email : ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data submitted : ", formData);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input type = 'text' name = 'name' value = {formData.name} onChange={handleChange}></input>
        </label>
        
        <label>Email :
          <input type = 'email' name = 'email' value = {formData.email} onChange={handleChange}></input>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
