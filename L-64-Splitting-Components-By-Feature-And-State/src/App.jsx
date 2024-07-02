import Header from './components/Header/Header.jsx'; // Importing Header component
import TabButton from './components/TabButton.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { useState, Fragment } from 'react'; // Importing useState hook
import { EXAMPLES } from './data.js'; // Importing EXAMPLES data
import Examples from './components/Examples.jsx';

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;