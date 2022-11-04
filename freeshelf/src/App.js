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
          <div className="img-box">
          <img src={book.coverImageUrl} className="cover" alt="book cover" />
          </div>
        </div>
      ))}
    </section>
  )};

const Description = ({url, publisher, date, details}) => {
  const [display, setDisplay] = useState(false)
  const handleClick = (event) => {setDisplay(!display)}
  return (
    <div>
    <button onClick={handleClick}>{display ? 'Less' : 'More'} Info</button>
    {display && 
    <div className="description-box">
      Link: <a href={url}>{url}</a>
      <p>{details}</p>
      <p>Publisher: {publisher ? <>{publisher}</> : "--"} / 
      Publication Date: {date ? <>{date}</> : "--"}</p>
    </div>}
    </div>
)};

export default App