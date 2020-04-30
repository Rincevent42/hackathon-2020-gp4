import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import European from './components/European.jsx';
import Asian from './components/Asian.jsx';
import Musical from './components/Musical.jsx';
import AOA from './components/AOA.jsx';
import './App.css';

/* This table is needed only for test purpose */
const objectIdTest = [
  254779,
  254801,
  254923,
  254842,
  254843,
  255949,
  255973,
  254825,
  254819,
  256846];

function App () {
  return (

    <div className='App'>
      <Router>
        <main id='App'>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/Asian'>
              <Asian />
            </Route>
            <Route exact path='/European'>
              <European />
            </Route>

            <Route exact path='/Musical'>
              <Musical />
            </Route>
            <Route exact path='/AOA'>
              <AOA />
            </Route>
          </Switch>
        </main>
      </Router>

    </div>
  );
}

export default App;
