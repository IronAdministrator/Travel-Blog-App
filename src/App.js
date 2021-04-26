import React, {useState, useEffect} from 'react'
import './App.css';
import {client} from './client'
import Blogs from './components/Blogs'

function App() {

  const [articles, setArticles] = useState([]) 

  useEffect(() => {
    client.getEntries({
    content_type : 'blogPost'
    })
    .then(response => setArticles(response.items))
    .catch(error => console.log(error))
  }, [])

  console.log(articles)

  return (
    <div className="App">
      <main>
        <Blogs blogs={articles} />
      </main>

    </div>
  );
}

export default App;


