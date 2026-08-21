import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data2, setData2] = useState([]);

  const url1 = 'https://jsonplaceholder.typicode.com/posts';
  const url2 = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    setLoading(true);
    axios.all([axios.get(url1), axios.get(url2)])
      .then(axios.spread((posts, users) => {
        setData(posts.data);
        setData2(users.data);
        setLoading(false);
        //throw new Error('An error occurred while fetching data');
      }))
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

      <h2>Posts</h2>
      <ul>
        {data.map ((post) => (
          <li key = {post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <br />
      <h2>Users</h2>
      <ul>
        {data2.map ((user) => (
          <li key = {user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
