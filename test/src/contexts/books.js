import axios from "axios";

const { createContext, useState, useCallback } = require("react");

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    if (response.status !== 200) {
        throw new Error('Data could not be fetched!')
      } else {
        setBooks(response.data);
      }
  }
  const stableFetchBooks = useCallback(fetchBooks, []);
    
  const createBook = async (title) => {
    try {
      const response = await axios.post('http://localhost:3001/books', {
          title,
      })
      const updatedBooks = [
          ...books,
          response.data
      ];
      setBooks(updatedBooks);
      return updatedBooks;
} catch (e) {
    console.log(e);
  }
  return null;
};
const editBookById = async ({id, title}) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    title
  });
  if (response.status !== 200) {
    throw new Error('Data could not be updated!')
  } else {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
          return {...book, ...response.data}
      }
      return book;
    });
    setBooks(updatedBooks);
  }
};
const deleteBookById = async (id) => {
  const response = await axios.delete(`http://localhost:3001/books/${id}`);
  if (response.status !== 200) {
    throw new Error('Data could not be deleted!')
  } else {
    const updatedBooks = books.filter((book) => {
      return book.id.toString() !== id;
    });
    setBooks(updatedBooks);
  }
};

const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
    stableFetchBooks
};

    return <BooksContext.Provider value={valueToShare}>
              {children}
           </BooksContext.Provider>
}

export { Provider };
export default BooksContext;
