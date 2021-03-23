import React from 'react';

const Books = () => {
    return (
        <div className="books">

            <div className="books__wrap">
                <div className="books__item">
                    <div className="books__inner">
                        <button>x</button>
                        <div className="books__name">Я, робот</div>
                        <div className="books__author">Айзек Азимов</div>
                    </div>
                </div>

                <div className="books__item">
                    <div className="books__inner">
                        <button>x</button>
                        <div className="books__name">Академия</div>
                        <div className="books__author">Айзек Азимов</div>
                    </div>
                </div>

                <div className="books__item">
                    <div className="books__inner">
                        <button>x</button>
                        <div className="books__name">Дети капитана Гранта</div>
                        <div className="books__author">Жюль Верн</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Books;