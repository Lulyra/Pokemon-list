import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Pagination from './components/Pagination'
import About from './components/About'
import Detail from './components/Detail'
import {Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
          <Route exact path="/" >
          <Pagination />
            <Main />
          <Pagination />
          </Route>
          <Route path='/about'>
              <About />
          </Route>
          <Route path='/detail/:id'>
              <Detail />
          </Route>
      </Switch>

    </div>
  );
}

export default App;
