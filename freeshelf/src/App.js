import React from 'react';
import './App.css';
import { books } from './bookdata.js';



function BookList() {
  const listBooks = books.map((book) => {
    return (
      <section>
      <div className="bookBox">
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <p>{book.shortDescription}</p>
      </div>
        <img src={book.coverImageUrl} className="cover" alt="book cover" />
      </section>
    )
  }
  )

  return (
    <div>
      {listBooks}
    </div>
  )
}
function App() {
  return (
    <div>
      <BookList />
    </div>
  )
}


export default App;