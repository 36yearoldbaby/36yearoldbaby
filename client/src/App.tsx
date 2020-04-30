import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  if (window.location.pathname !== '/man') {
    window.location.pathname = '/man'
  }

  return (
    <div className="App">
      Steve.
    </div>
  );
}

export default App;
