import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('booksData.json')
         .then(res => res.json())
         .then(data => setBooks(data))
    }, [])
    
    return (
        <div>
            {/* <p>Total Books: {books.length}</p> */}
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                   books.map(book => <Book key={book.bookId} book={book}></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;