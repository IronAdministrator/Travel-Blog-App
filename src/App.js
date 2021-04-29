import React, {useState, useEffect} from 'react';
import './App.css';
import {client} from './client';
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import America from './components/America';
import Africa from './components/Africa';
import Europe from './components/Europe';
import Asia from './components/Asia';
import JumboImage from './components/JumboImage';



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
      <Router>
        <NavBar />
        <JumboImage />

        <Switch>
          <Route exact path='/'>
            <Blogs blogs={articles} />
          </Route>
          <Route exact path='/america'>
            <America  americaBlogs={articles}/>
          </Route>
          <Route exact path='/africa'>
            <Africa africaBlogs={articles}/>
          </Route>
          <Route exact path='/asia'>
            <Asia  asiaBlogs={articles}/>
          </Route>
          <Route exact path='/europe'>
            <Europe europeBlogs={articles} />
          </Route>
        </Switch>
      </Router>



      <Footer />

    </div>
  );
}

export default App;


