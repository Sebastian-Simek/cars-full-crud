import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch-utils';
import Books from './Books';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function setBookData() {
      const books = await getBooks;
      setBooks(books);
    }
    console.log(books);
    setBookData();
  }, []);

  return (
    <div>
      {/* {
        books.map((book, i) => <Books 
          key={book.name + book.Author + i}
          book={book}
        />)
      } */}
    </div>
  );
}
