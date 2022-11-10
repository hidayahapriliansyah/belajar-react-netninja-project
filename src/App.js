import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const name = 'Muhamad Adi';
  const age = 21;
  const array = [1, 2, 4];
  const link = 'http://www.google.com/';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route path="/">
                <Home name={name} age={age} array={array} link={link} />
              </Route>
            </Switch>
        </div>
       </div>
    </Router>
  );
}

export default App;
