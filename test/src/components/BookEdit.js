import { useContext, useState } from "react";
import BooksContext from "../contexts/books";

function BookEdit({ onSubmit, book }) {
    const [newTitle, setNewTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById({title: newTitle, id: book.id});
    }
    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    }

    return(
        <form className="book-edit" onSubmit={handleSubmit}>
            <label className="title" htmlFor="title">Title</label>
            <input 
                id="title"
                className="input" 
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
            />
            <button className="button is-primary" type="submit">
                Save
            </button>
        </form>
    )
}

export default BookEdit;
