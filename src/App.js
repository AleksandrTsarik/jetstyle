import logo from './logo.svg';
import React from 'react';
import './App.css';
import './style/main.sass'
import Books from './components/Books/Books';
import Entry from './components/Entry/Entry';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="inner">
        <Books />
        <Entry />
      </div>
    </div>
  );
}

export default App;
