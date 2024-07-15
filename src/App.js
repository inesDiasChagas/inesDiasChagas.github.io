import book from "./styles/icons/book.png";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <p className='subtitle'>Bem vindo ao nosso estúdio</p>
      <div className='titleContainer'>
        <h1 className='title'>BOOK I</h1>
        <img className='titleIcon' src={book} alt='Book' />
        <img className='titleIcon' src={book} alt='Book' />
        <h1 className='title'>ERSION</h1>
      </div>
    </div>
  );
}

export default App;
