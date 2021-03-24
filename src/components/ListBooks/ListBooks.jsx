import React from 'react';
import Book from './Book/Book';

const ListBooks = (props) => {


let bookElements = props.booksData.map(b => <Book delBook={props.delBook} name={b.name} author={b.author} id={b.id}/>);

    return (
        <div className="books">
            <div className="books__wrap">

                { bookElements }

            </div>
        </div>
    )
}

export default ListBooks;