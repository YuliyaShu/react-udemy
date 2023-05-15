import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";
import { useState } from "react";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();
    const handleDeleteBook = async (event) => {
        await deleteBookById(event.target.id);
    };
    const handleOnClickEditBook = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = async () => {
        setShowEdit(false);
    }
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit 
            onSubmit={handleSubmit} 
            book={book} 
            key={book.id}
        />;
    }
    
    return(
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button 
                    className="edit" 
                    onClick={handleOnClickEditBook} 
                    id={book.id}>
                        Edit
                </button>  
                <button 
                    className="delete" 
                    onClick={handleDeleteBook} 
                    id={book.id}>
                        X
                </button>  
            </div>
        </div> 
    ) 
}

export default BookShow;
