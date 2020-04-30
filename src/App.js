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

function App() {
  return (

    <div className="App">
      <Router>
        <main id='App'>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/Asian' />
            <Asian />

            <Route exact path='/European'>
              <European />
            </Route>

            <Route exact path='/Musical' />
            <Musical />

            <Route exact path='/AOA' />
            < AOA />


          </Switch>
        </main >
      </Router >

    </div >
  );
}

export default App;
