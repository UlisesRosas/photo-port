// this file housese all the other components

// this is similar to 'const React = require('react');' in a regular express app 
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;