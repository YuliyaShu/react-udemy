import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);
    const createBook = (title) => {
        const nextId = Math.floor(Math.random() * 9999);
        const updatedBooks = [
            ...books,
            { id: nextId, title }
        ];
        setBooks(updatedBooks);
    };
    const editBookById = ({id, title}) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title}
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id.toString() !== id;
        });
        setBooks(updatedBooks);
    };

    return(
        <div className="app">
            <h1>Reading list</h1>
            <BookList 
                books={books} 
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;
