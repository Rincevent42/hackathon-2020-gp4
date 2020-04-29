import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';

function App() {
  return (

    <div className="App">
      <Home />
    </div>
  );
}

export default App;
