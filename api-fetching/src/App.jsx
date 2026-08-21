import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <p>Loading...</p>
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
