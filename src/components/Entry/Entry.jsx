import React from 'react';

const Entry = () => {
    return (
        <div className="entry">
          <label classNames="entry__label">
            <input type="text"/>
          </label>
          <div className="entry__buttons">
              <button>Add</button>
          </div>
        </div>
    )
}

export default Entry;