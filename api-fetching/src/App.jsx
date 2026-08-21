import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
        //throw new Error('An error occurred while fetching data');
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>API Fetching...</h1>
      <ul>
        {data.map ((item) => (
          <li key = {item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
