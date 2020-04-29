import React from 'react';
import './App.css';
import Artwork from './pages/Artwork';

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
      <header className='App-header'>

        <Artwork objectId={objectIdTest} />

      </header>
    </div>
  );
}

export default App;
