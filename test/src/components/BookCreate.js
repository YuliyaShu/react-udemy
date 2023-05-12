import { useContext, useState } from "react";
import BooksContext from "../contexts/books";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);
    const handleChange = (event) => setTitle(event.target.value);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const createBookResponse = await createBook(title);
        if (createBookResponse) {
            setTitle('');
          } else {
            console.log("Fetch error");
          }
    }

    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    ) 
}

export default BookCreate;
