import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Muhamad Adi';
  const age = 21;
  const array = [1, 2, 4];
  const link = 'http://www.google.com/';

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">App React</h1>
        <p>{name}</p>
        <p>Umur {age}</p>
        <p>Test array {array} </p>
        <a href={link}>Google Link</a>
      </div>
    </div>
  );
}

export default App;
