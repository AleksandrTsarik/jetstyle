import React from 'react';
// import { Spring, Transition } from 'react-spring'


const Book = (props) => {

    let oldBook = React.createRef();

    let delBook = () => {
      let id = oldBook.current.getAttribute('id');
      props.delBook(id);
    }

    return (

        <div className="books__item">
            <div className="books__inner">
                <button id="del-btn" id={props.id} ref={ oldBook } onClick={ delBook }>x</button>
                <div className="books__name">{ props.name }</div>
                <div className="books__author">{ props.author }</div>
            </div>
        </div>
    )
}

export default Book;
