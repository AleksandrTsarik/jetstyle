
let booksData = [
    {id: 1, name: 'Я, робот', author: 'Айзек Азимов'},
    {id: 2, name: 'Академия', author: 'Айзек Азимов'},
    {id: 3, name: 'Дети капитана Гранта', author: 'Жюль Верн'}
]

export let addBook = (booksName, booksAuthor) => {
    let newBook= {
        id: 4,
        name: booksName,
        author: booksAuthor
    };
    booksData.push(newBook);  

    };

export let delBook = (id) => {
    booksData.forEach( (item, index) => {
        if(item.id == id) {
            booksData.splice(index, 1)
        }
    })
    console.log(booksData)
}

export default booksData;

