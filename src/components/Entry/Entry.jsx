import React from 'react';

const Entry = (props) => {

    let newBook = React.createRef();

    let addBook = () => {
      let text = newBook.current.value;
      props.addBook(text);
    }
  
    return (
        <div className="entry">
          <label classNames="entry__label">
            <input type="text" ref={ newBook } />
          </label>
          <div className="entry__buttons">
              <button onClick={ addBook }>Add</button>
          </div>
        </div>
    )
}

export default Entry;