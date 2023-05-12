import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleChange = (event) => setTitle(event.target.value);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newTitleReady = await onCreate(title);
        if (newTitleReady) {
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
