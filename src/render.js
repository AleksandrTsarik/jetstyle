import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { addBook, delBook } from './localStorage';

export let rerenderEntireTree =(booksData) => {
    ReactDOM.render(
        <React.StrictMode>
          <App  booksData={booksData} addBook={addBook} delBook={delBook} />
        </React.StrictMode>,
        document.getElementById('root')
      );
}


