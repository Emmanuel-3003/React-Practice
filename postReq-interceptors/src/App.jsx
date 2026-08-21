import { useState } from 'react'
import './App.css'
import api from '../api/api';


function App() {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: 'New Post',
      body: 'This is a new post.',
      userId: 1,
    }
    api.post('/posts', newPost)
    .then(response => {
      console.log('Post created:', response.data);
      setData(response.data);
    });
  }
  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default App



// axios.interceptors.request.use(request => {
//   console.log('Starting Request');
//   return request;
// });

// axios.interceptors.response.use(response => {
//   console.log('Response:', response);
//   return response;
// });