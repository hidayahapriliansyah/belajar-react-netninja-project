import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
  const name = 'Muhamad Adi';
  const age = 21;
  const array = [1, 2, 4];
  const link = 'http://www.google.com/';

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home name={name} age={age} array={array} link={link} />
      </div>
    </div>
  );
}

export default App;
