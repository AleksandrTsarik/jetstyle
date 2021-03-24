// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import booksData from './localStorage';
import { rerenderEntireTree } from './render'



rerenderEntireTree(booksData);

reportWebVitals();
