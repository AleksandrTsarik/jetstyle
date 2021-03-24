import React from 'react';
import './App.css';
import './style/main.sass'
import Entry from './components/Entry/Entry';
import ListBooks from './components/ListBooks/ListBooks';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <div className="inner">
        <ListBooks 
          booksData={props.booksData}
          delBook={props.delBook} 
         />
        <Entry addBook={props.addBook} />
      </div>
    </div>
  );
}

export default App;
