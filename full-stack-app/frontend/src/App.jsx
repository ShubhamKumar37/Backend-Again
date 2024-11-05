import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/jokes")
    .then(res => setJokes(res.data))
    .catch(err => console.log(err))

    console.log("If there is no error, this will run");
  }, []);

  return (
    <div>
        <h1>Jokes</h1>
        <h3>Number of jokes are {jokes.length}</h3>
        {
            jokes.map(joke => <p key={joke.id}>{joke.joke}</p>)
        }
    </div>
  )
}

export default App
