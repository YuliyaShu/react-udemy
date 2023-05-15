import { useContext, useEffect } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./contexts/books";

function App() {
  const { stableFetchBooks } = useContext(BooksContext);
  
  useEffect(() => {
    stableFetchBooks();
  } , [stableFetchBooks]);

  return (
    <div className="app">
            <h1>Reading list</h1>
            <BookList /> 
            <BookCreate />
        </div>
  );
}

export default App;
