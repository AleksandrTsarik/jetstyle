
import './index.css';
import reportWebVitals from './reportWebVitals';
import booksData from './localStorage';
import { rerenderEntireTree } from './render'



rerenderEntireTree(booksData);

reportWebVitals();
