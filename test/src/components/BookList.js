import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../contexts/books";

function BookList() {
    const { books } = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        return <BookShow 
            book={book} 
            key={book.id} 
        />
    });

    return <div className="book-list">
        {renderedBooks}
        </div>
}

export default BookList;
