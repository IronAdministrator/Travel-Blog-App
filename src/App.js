import React, {useState, useEffect} from 'react';
import './App.css';
import {client} from './client';
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import Footer from './components/Footer';


function App() {

  const [articles, setArticles] = useState([]);
  console.log(articles);

  useEffect(() => {
    client.getEntries({
    content_type : 'blogPost'
    })
    .then(response => setArticles(response.items))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main>
        <Blogs blogs={articles} />
      </main>
      <Footer />

    </div>
  );
}

export default App;


