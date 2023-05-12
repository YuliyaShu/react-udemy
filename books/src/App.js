import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

async function App() {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        console.log('🚀 ~ fetchBooks ~ response:', response);
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
          } else {
            setBooks(response.data);
          }
    }
    const createBook = async (title) => {
        try {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        })
        const book = await response.json();
        console.log('🚀 ~ createBook ~ book:', book);
        const updatedBooks = [
            ...books,
            book.data
        ];
        setBooks(updatedBooks);
        return book;
    } catch (e) {
        console.log(e);
       }
       return null;
    };

    useEffect(() => {
        fetchBooks();
    }, []);

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
