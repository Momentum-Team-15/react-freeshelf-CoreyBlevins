import './App.css';
import {useState} from 'react';

const App = ({ bookData }) => {
  return (
    <section>
      {bookData.map((book) => (
        <div className="book-box">
          <div>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.shortDescription}</p>
            <Description 
            url={book.url}
            publisher={book.publisher}
            date={book.publicationDate}
            details={book.detailedDescription}/>
          </div>
            <img src={book.coverImageUrl} className="cover" alt="book cover" />
        </div>
      ))}
    </section>
  )};


const Description = ({url, publisher, date, details}) => {
  const [display, setDisplay] = useState(false)
  const handleClick = (event) => {setDisplay(!display)} 
  return (
    <>
    <button onClick={handleClick} 
      type="button" aria-controls="det" aria-expanded={display ? "true" : "false"}>
      <strong>{display ? 'Less' : 'More'} Info</strong></button>
    {display && 
    <div id="det" className="description-box">
      <strong>Link:</strong> <a href={url}>{url}</a>
      <p><strong>Full Description:</strong><br/>{details}</p>
      <p><strong>Publisher:</strong> {publisher ? <>{publisher}</> : "--"} / <strong>
        Publication Date:</strong> {date ? <>{date}</> : "--"}</p>
    </div>}
    </>
)};

export default App