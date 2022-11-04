import './App.css';

const App = ({ bookData }) => {
  return (
    <section>
      {bookData.map((book) => (
        <div className="bookBox">
          <div>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.shortDescription}</p>
          </div>
          <div className="imageBox">
            <img src={book.coverImageUrl} className="cover" alt="book cover" />
          </div>
        </div>
      ))}
    </section>
  )
};

export default App