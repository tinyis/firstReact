import logo from './logo.svg';
import './App.css';

var title="Martin Eden";
var author="Jack London";
var genre="adventure";
var pages=500;
var reviews=["good book!", "nice!"];

function Showbook() {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Pages: {pages}</p>
      <p>Reviews: </p>
      <ul>
        <li>{reviews[0]}</li>
        <li>{reviews[1]}</li>
      </ul>
    </div>    
  );
 }

 function ShowbookPart1() {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
    </div>   
  );
 }

 function ShowbookPart2() {
  return (
    <div>
    <p>Pages: {pages}</p>
    <p>Reviews: </p>
    <ul>
      <li>{reviews[0]}</li>
      <li>{reviews[1]}</li>
    </ul>
  </div>
  );
 }


function Quote(props) {
 return (
 <>
    <p>Title: {props.title}</p>
    <p>Author: {props.author}</p>
    <p>Genre: {props.genre}</p>
    <p>Pages: {props.pages}</p>
    <p>Reviews: </p>
    <ul>
      <li>{props.reviews[0]}</li>
      <li>{props.reviews[1]}</li>
    </ul> 
 </>
 );
}

function App() {
  return (
    <div className="App">
      {/* <Showbook/> */}
      {/* <ShowbookPart1/>
      <ShowbookPart2/> */}   
        <Quote title={title} author={author} genre={genre} pages={pages} reviews={reviews}/>
    </div>
  );
}

export default App;
